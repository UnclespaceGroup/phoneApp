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
        reviews,
        ...props
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
    current = current.reverse()
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
          !current.length && <Text style={{fontSize: 20, textAlign: 'center', paddingTop: 20}}> Ничего не найдено </Text>
        }
        {
          _.map(current, (item, key) =>
            <ForumCard key={key} {...{...item, ...props}} />
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
      downloadComments,
      downloadUsers
    } = this.props
    changeSearchSwitch()
    downloadCountry()
    downloadReview()
    downloadBrand()
    downloadComments()
    downloadUsers()
  }
}

export default ForumScreen
