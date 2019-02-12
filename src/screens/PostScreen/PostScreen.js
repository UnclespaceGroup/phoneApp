import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
import CommentAdd from '../../components/Comment/CommentAdd'
import { GetById } from '../../utils'
import * as arrd from '../../constants/addr'
import TagBlock from '../../components/Blocks/TagBlock'
import Carousel from '../../components/Carousel/Carousel'
import { s } from './style'
import DateRender from '../../components/Date/DateRender'

const _default = 'http://artrack.ru/uploads/no-img.jpg'

class PostScreen extends React.Component {
  state = {
    focused: false
  }

  move = (index) => {
    this.setState({ focused: true})
    setTimeout(
      () => {
        this._ref.scrollTo({x: 0, y: index, animated: true})
      }, 100)
  }

  render () {
    const {
      props: {
        item,
        country,
        brands,
        ...props
      },
      state: {
        focused
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
        <View style={focused ? s.container_active : s.container}>
          <View style={s.slider}>
            <Carousel {...{images, title: item.Title}} />
          </View>
          <View style={s.wrapper}>
            <View>
              <Text style={s.title}>{item.Title}</Text>
              <Text style={s.light}>страна: <Text>{GetById(country, item.CountryId).Name}</Text></Text>
              <Text style={s.light}>бренд: <Text>{GetById(brands, item.BrandId).Name}</Text></Text>
              <DateRender>{item.Date}</DateRender>
            </View>
            <TagBlock items={tags} />
            <Text style={s.text}>{item.Text}</Text>
          </View>
          <View style={s.comment} ref={(cur) => {this._input = cur}}>
            <CommentAdd {...{...props, move, id: item.Id, blur: () => {this.setState({focused: false})}}} />
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
