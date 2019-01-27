import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
import CommentAdd from '../../components/Comment/CommentAdd'
import _ from 'lodash'
import * as arrd from '../../constants/addr'
import { RkButton } from 'react-native-ui-kitten'
import TagBlock from '../../components/Blocks/TagBlock'
import Carousel from '../../components/Carousel/Carousel'

// TODO Сделать сжатие отправляемых фото
class PostScreen extends React.Component {
  move = (index) => {
    this._ref.scrollTo({x:0, y: index, animated: true})
  }
  render () {
    const {
      props: {
        item,
        country
      },
      move
    } = this
    let curCountry = _.find(country, x => x.Id === item.CountryId)
    curCountry = curCountry ? curCountry.Name : 'Другая'

    const images = [
      arrd.IMAGES_SERVER + item.Image,
      arrd.IMAGES_SERVER + item.Image2,
      arrd.IMAGES_SERVER + item.Image3
    ]

    const tags = item.Tags ? item.Tags.slice(1).split('#') : []

    return (
      <ScrollView ref={(cur) => {this._ref = cur}} >
        <View style={s.container}>
          <Carousel {...{images}} />
          <Text>{item.Image}</Text>
          <Text>id = {item.Id}</Text>
          <Text>{item.Title}</Text>
          <Text>{item.Text}</Text>
          <Text>страна: {curCountry}</Text>
          <TagBlock items={tags} />
          <CommentAdd {...{move}} />
        </View>
      </ScrollView>
    )
  }
  static defaultProps = {
    Id: 'Пусто',
    Title: 'Пусто',
    curCountry: 'Другая',
    Text: 'Пусто'
  }
}
const s = StyleSheet.create({
  container: {
    paddingBottom: 250
  }
})

export default PostScreen
