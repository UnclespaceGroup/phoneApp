import React from 'react'
import { ScrollView, Text } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import { RkButton } from 'react-native-ui-kitten'

class ForumScreen extends React.Component {
  render () {
    const {
      products,
      filter,
      currentCountry,
      reviews
    } = this.props
    const current = _.filter(products, ({country}) => {
      return currentCountry ? (country === currentCountry) : true
    })
    return (
      <ScrollView>
        <RkButton onPress={() => {
          Actions.push('addReview')
        }} >Добавить отзыв</RkButton>
        {
          _.map(reviews, (item, key) =>
            <ForumCard key={key} {...item} />
          )
        }
      </ScrollView>
    )
  }
}

export default ForumScreen
