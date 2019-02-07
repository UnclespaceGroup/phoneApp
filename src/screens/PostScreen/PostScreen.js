import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
import CommentAdd from '../../components/Comment/CommentAdd'
import { GetById } from '../../utils'
import * as arrd from '../../constants/addr'
import TagBlock from '../../components/Blocks/TagBlock'
import Carousel from '../../components/Carousel/Carousel'
import { s } from './style'

const _default = 'http://artrack.ru/uploads/no-img.jpg'

class PostScreen extends React.Component {
  move = (index) => {
    this._ref.scrollTo({x: 0, y: index, animated: true})
  }

  render () {
    const {
      props: {
        item,
        country,
        brands,
        ...props
      },
      move
    } = this

    const images = [
      (item.Image2 !== 'default') ? arrd.IMAGES_SERVER + item.Image : arrd.IMAGES_SERVER + 'default.png',
      (item.Image2 !== 'default') && arrd.IMAGES_SERVER + item.Image2,
      (item.Image3 !== 'default') && arrd.IMAGES_SERVER + item.Image3
    ]

    const tags = item.Tags ? item.Tags.slice(1).split('#') : []

    return (
      <ScrollView ref={(cur) => {this._ref = cur}}>
        <View style={s.container}>
          <View style={s.slider}>
            <Carousel {...{images, title: item.Title}} />
          </View>
          <View style={s.wrapper}>
            <View>
              <Text style={s.title}>{item.Title}</Text>
              <Text style={s.light}>страна: <Text>{GetById(country, item.CountryId).Name}</Text></Text>
              <Text style={s.light}>бренд: <Text>{GetById(brands, item.BrandId).Name}</Text></Text>
            </View>
            <TagBlock items={tags} />
            <Text style={s.text}>{item.Text}</Text>
          </View>
          <View style={s.comment}>
            <CommentAdd {...{...props, move, id: item.Id}} />
          </View>
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

export default PostScreen
