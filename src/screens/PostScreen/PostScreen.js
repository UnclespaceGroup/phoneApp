import React from 'react'
import { ScrollView } from 'react-native'
import { Text, Image } from 'react-native'

class PostScreen extends React.Component {
  render () {
    const {
      props: {
        id,
        title,
        description,
        image,
        country
      }
    } = this
    return (
      <ScrollView>
        <Image source={image} />
        <Text>id = {id}</Text>
        <Text>{title}</Text>
        <Text>Страна: {country}</Text>
        <Text>{description}</Text>
        <Text>{'Зарегестрируйтесь, чтобы оставлять комментарии'}</Text>
      </ScrollView>
    )
  }
}

export default PostScreen
