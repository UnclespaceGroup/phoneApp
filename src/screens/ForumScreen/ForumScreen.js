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
    console.log(ready)
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
      return currentCountry ? (CountryId === currentCountry) : true
    })
    current = _.filter(current, ({BrandId}) => {
      return currentBrand ? (BrandId === currentBrand) : true
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
      changeSearchSwitch
    } = this.props
    changeSearchSwitch()
    downloadCountry()
    downloadReview()
    downloadBrand()
  }
}

export default ForumScreen
