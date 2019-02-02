import React from 'react'
import { ScrollView, Text, RefreshControl } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'

class ForumScreen extends React.Component {
  state = {
    refreshing: false
  }
  componentWillReceiveProps(props){
    const { ready } = props
    this.setState({
      refreshing: !(ready.review && ready.country && ready.brand)
    })
  }
  render () {
    const {
      props: {
        currentBrand,
        currentCountry,
        reviews
      },
      state: {
        refreshing
      },
      onRefresh
    } = this
    let current = _.filter(reviews, ({CountryId}) => {
      return (typeof(currentCountry) !== 'undefined' )? (CountryId === currentCountry) : true
    })
    current = _.filter(current, ({BrandId}) => {
      return (typeof(currentBrand) !== 'undefined' )? (BrandId === currentBrand) : true
    })
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        }
      >
        {
          _.map(current, (item, key) =>
            <ForumCard key={key} {...item} />
          )
        }
      </ScrollView>
    )
  }

  onRefresh = () => {
    const {
      downloadCountry,
      downloadReview,
      downloadBrand,
      changeSearchSwitch,
      downloadComments
    } = this.props
    changeSearchSwitch()
    downloadCountry()
    downloadReview()
    downloadBrand()
    downloadComments()
  }
}

export default ForumScreen
