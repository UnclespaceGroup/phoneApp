import React from 'react'
import { ScrollView, Text } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'

class ForumScreen extends React.Component {
  render () {
    const {
      products
    } = this.props
    return (
      <ScrollView>
        <Text>Форум</Text>
        {
          _.map(products, (item, key) =>
            <ForumCard key={key} {...item} />
          )
        }
      </ScrollView>
    )
  }
}

export default ForumScreen
