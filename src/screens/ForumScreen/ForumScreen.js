import React from 'react'
import { ScrollView } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'

class ForumScreen extends React.Component {
  render () {
    const {
      forum
    } = this.store
    return (
      <ScrollView>
        {
          _.map(forum, (item, key) =>
            <ForumCard key={key} {...item} />
          )
        }
      </ScrollView>
    )
  }
}

export default ForumScreen
