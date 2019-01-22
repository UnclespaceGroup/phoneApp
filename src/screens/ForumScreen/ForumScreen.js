import React from 'react'
import { ScrollView, Text } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'

class ForumScreen extends React.Component {
  render () {
    const {
      filter,
      currentBrand,
      currentCountry,
      reviews
    } = this.props
    let current = _.filter(reviews, ({CountryId}) => {
      return currentCountry ? (CountryId === currentCountry) : true
    })
    current = _.filter(current, ({BrandId}) => {
      return currentBrand ? (BrandId === currentBrand) : true
    })
    return (
      <ScrollView>
        {
          _.map(current, (item, key) =>
            <ForumCard key={key} {...item} />
          )
        }
      </ScrollView>
    )
  }
}

export default ForumScreen
