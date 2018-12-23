import React from 'react'
import { ScrollView, Text } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'

class ForumScreen extends React.Component {
  render () {
    const {
      products,
      filter
    } = this.props
    const current = _.filter(products, ({country}) => {
      return (filter.country === true) ? true : (country === filter.country)
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
