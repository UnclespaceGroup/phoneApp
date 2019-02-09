import React from 'react'
import { View, ScrollView, Alert, Image, Text, TouchableOpacity } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { Dropdown } from 'react-native-material-dropdown'
import _ from 'lodash'
import { ImagePicker } from 'expo'
import AddImageButton from '../TabIcons/AddImageButton'
import s from './style'
import { custom } from '../../global'
import Icon from 'react-native-vector-icons/Ionicons'
import ValidationInput from '../ValidationInput/ValidationInput'

class AddReviewForm extends React.Component {
  state = {
    title: '',
    text: '',
    cur_brand: 'Другой',
    cur_country: 'Другая',
    images: [
      null, null, null
    ],
    sending: false,
    validTitle: false,
    validText: false,
    intact: true,
    item_brands: [],
    item_country: []
  }

  componentDidMount () {
    const itemBrands = _.map(this.props.brands, ({Name, Id}) => {
      return {
        value: Name,
        id: Id
      }
    })
    const itemCountry = _.map(this.props.country, ({Name, Id}) => {
      return {
        value: Name,
        id: Id
      }
    })
    this.setState({
      itemBrands,
      itemCountry
    })
  }

  render () {
    const {
      state: {
        title,
        text,
        cur_brand,
        cur_country,
        images,
        sending,
        validText,
        validTitle,
        intact,
        itemBrands,
        itemCountry
      },
      submit,
      _pickImage,
      change,
      removeImage
    } = this

    return (
      <ScrollView style={s.container}>
        <ValidationInput
          placeholder={'Заголовок'}
          value={title}
          name={'title'}
          intact={intact}
          onChange={change}
          validation={{
            minSize: 0,
            maxSize: 20,
            numbersOnly: false
          }}
        />
        <Dropdown
          label={'Выберете Бренд'}
          data={itemBrands}
          value={cur_brand}
          onChangeText={(val) => this.setState({cur_brand: val})}
        />
        <Dropdown
          label={'Выберете Страну'}
          data={itemCountry}
          value={cur_country}
          onChangeText={(val) => this.setState({cur_country: val})}
        />
        <ValidationInput
          name={'text'}
          onChange={change}
          value={text}
          multiline={true}
          intact={intact}
          numberOfLines={8}
          placeholder={'Ваш отзыв'}
          validation={{
            minSize: 0,
            maxSize: 1000,
            numbersOnly: false
          }}
        />
        <View
          style={{flex: 1, flexDirection: 'row', justifyItems: 'center', justifyContent: 'center', marginTop: 5}}>
          <View>
            <View style={{flex: 1, flexDirection: 'row', width: '90%'}}>
              {
                images[0] && <TouchableOpacity onPress={() => {removeImage(0)}}>
                  <Image source={{uri: images[0].uri}} style={s.image}  />
                </TouchableOpacity>
              }
              {
                images[1] && <TouchableOpacity onPress={() => {removeImage(1)}}>
                  <Image source={{uri: images[1].uri}} style={s.image}  />
                </TouchableOpacity>
              }
              {
                images[2] && <TouchableOpacity onPress={() => {removeImage(2)}}>
                  <Image source={{uri: images[2].uri}} style={s.image}  />
                </TouchableOpacity>
              }
              {
                !images[2] &&
                <AddImageButton
                  click={() => {_pickImage()}}
                  style={{
                    marginBottom: 20
                  }}
                />
              }
            </View>
            <RkButton
              onPress={submit}
              style={(validText) ? s.send : s.sendDisable}
            ><Text style={s.sendText}>Отправить</Text><Icon name={'ios-send'} color={custom.white}
                                                            size={30} /></RkButton>
          </View>
        </View>
      </ScrollView>
    )
  }

  change = (name, value, _valid) => {
    this.setState({
      [name]: value
    })

    if (name === 'text') {
      this.setState({
        validText: _valid
      })
    }
    else {
      this.setState({
        validTitle: _valid
      })
    }
  }

  submit = () => {
    const {
      state: {
        images,
        validTitle,
        validText
      },
      _submit
    } = this
    if (!validText || !validTitle) {
      this.setState({intact: false})
      return false
    }

    if (!images[0]) {
      Alert.alert(
        'Может добавите фото товара?',
        'С изображением товара будет лучше',
        [
          {text: 'Хорошо, сейчас добавлю', onPress: () => null},
          {text: 'Нет, пусть будет без фото', onPress: () => { _submit()}}
        ]
      )
    }
    else _submit()
  }

  _submit = () => {
    const {
      state: {
        title,
        text,
        cur_brand,
        cur_country,
        images
      },
      props: {
        addReview,
        brands,
        country,
        profile
      },
      imageCorrect
    } = this

    let countryId = _.find(country, ({Id, Name}) => Name === cur_country)
    countryId = countryId ? countryId.Id : 0

    let brandId = _.find(brands, ({Id, Name}) => Name === cur_brand)
    brandId = brandId ? brandId.Id : 0

    const _images = [
      images[0] && imageCorrect(images[0]),
      images[1] && imageCorrect(images[1]),
      images[2] && imageCorrect(images[2])
    ]
    console.log(_images)

    const data = {
      Title: title,
      Text: text,
      BrandId: brandId,
      CountryId: countryId,
      Data: new Date().toString(),
      Active: false,
      UserId: profile.Id,
      Image: _images[0] && _images[0].name || 'default',
      Image2: _images[1] && _images[1].name || 'default',
      Image3: _images[2] && _images[2].name || 'default'
    }

    addReview(
      data, _images
    )
    this.setState({
      title: '',
      text: '',
      cur_brand: 'Другой',
      cur_country: 'Другая',
      images: [null, null, null]
    })
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.1
    })

    if (!result.cancelled) {
      let images = this.state.images
      if (!images[0]) images[0] = result
      else if (!images[1]) images[1] = result
      else if (!images[2]) images[2] = result

      this.setState({images})
    }
  }
  removeImage = (index) => {
    let {images} = this.state
    if (index === 0) {
      images[0] = images[1]
      images[1] = images[2]
      images[2] = null
    }
    else if (index === 1) {
      images[1] = images[2]
      images[2] = null
    }
    if (index === 2) {
      images[2] = null
    }
    this.setState({images})
  }
  imageCorrect = (image) => {
    let localUri = image.uri
    let filename = localUri.split('/').pop()
    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : `image`

    let now_filename = Math.random().toString(36).substring(7) + '_' + filename
    return {
      uri: localUri,
      name: now_filename,
      type
    }
  }
}

export default AddReviewForm