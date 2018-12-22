import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native'

class PostScreen extends React.Component {
  render () {
    const {
      props: {
        id,
        title,
        description
      }
    } = this
    return (
      <ScrollView>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </ScrollView>
    )
  }
}

export default PostScreen
