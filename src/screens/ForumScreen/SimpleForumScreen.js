import React from 'react'
import { ScrollView, Text, RefreshControl } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'

class SimpleForumScreen extends React.Component {
  state = {
    refreshing: false
  }
  render () {
    const {
      props: {
        reviews,
        ...props
      }
    } = this

    return (
      <ScrollView>
        {
          _.map(reviews, (item, key) =>
            <ForumCard key={key} {...{...item, ...props}} />
          )
        }
      </ScrollView>
    )
  }
}

export default SimpleForumScreen
