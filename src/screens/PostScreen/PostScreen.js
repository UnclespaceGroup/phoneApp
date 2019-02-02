import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
import CommentAdd from '../../components/Comment/CommentAdd'
import _ from 'lodash'
import * as arrd from '../../constants/addr'
import TagBlock from '../../components/Blocks/TagBlock'
import Carousel from '../../components/Carousel/Carousel'
import { s } from './style'

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

    let curCountry = _.find(country, x => x.Id === item.CountryId)
    curCountry = curCountry ? curCountry.Name : 'Другая'

    let curBrand = _.find(brands, x => x.Id === item.BrandId)
    curBrand = curBrand ? curBrand.Name : 'Другой'

    const images = [
      arrd.IMAGES_SERVER + item.Image,
      arrd.IMAGES_SERVER + item.Image2,
      arrd.IMAGES_SERVER + item.Image3
    ]

    const tags = item.Tags ? item.Tags.slice(1).split('#') : []

    console.log(item)
    return (
      <ScrollView ref={(cur) => {this._ref = cur}}>
        <View style={s.container}>
          <Carousel {...{images, title: item.Title}} />
          <View style={s.wrapper}>
            <View>
              <Text style={s.light}>страна: <Text>{curCountry}</Text></Text>
              <Text style={s.light}>бренд: <Text>{curBrand}</Text></Text>
            </View>
            <TagBlock items={tags} />
            <Text style={s.text}>{item.Text}</Text>
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
