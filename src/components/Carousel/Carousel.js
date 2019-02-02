import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import ImageCarousel from 'react-native-image-carousel'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'

class Carousel extends Component {
  _imageCarousel: ImageCarousel

  componentWillMount () {
    (this: any)._renderHeader = this._renderHeader.bind(this)
  }

  _renderHeader = () => {
    return (
      <TouchableWithoutFeedback onPress={this._imageCarousel.close}>
        <View>
          <Icon name={'close'} style={{color: 'white', left: 10, top: 10}} size={30} />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _renderFooter = () => {
    return (
      <Text>Footer!</Text>
    )
  }

  _renderContent = (idx) => {
    const {images} = this.props
    return (
      <Image
        style={{
          width: '100%',
          height: '100%'
        }}
        source={{uri: images[idx]}}
        resizeMode={'contain'}
      />
    )
  }

  render () {
    const {
      images
    } = this.props
    const current = _.filter(images, image => image.match(/\/([^/]*)$/)[1] !== 'default')
    return (
      <View>
        <Text style={{
          position: 'absolute',
          left: 5,
          bottom: 20,
          zIndex: 5,
          color: 'white',
          fontSize: 25
        }}
        >Заголовок</Text>
        <ImageCarousel
          ref={(imageCarousel: ImageCarousel) => {
            this._imageCarousel = imageCarousel
          }}
          renderContent={this._renderContent}
          renderHeader={this._renderHeader}
          renderFooter={this._renderFooter}
        >
          {
            _.map(current, (url) =>
              <Image
                style={{width: 300, height: 250}}
                key={url}
                source={{uri: url, height: 300}}
                resizeMode={'contain'}
              />
            )}
        </ImageCarousel>
      </View>
    )
  }
}

export default Carousel
