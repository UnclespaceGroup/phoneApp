import React from 'react'
import { View, ScrollView, TextInput, StyleSheet, Alert, PixelRatio, Image } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { Dropdown } from 'react-native-material-dropdown'
import _ from 'lodash'
import { ImagePicker } from 'expo'
import AddImageButton from '../TabIcons/AddImageButton'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '5%'
  },
  inputs: {
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 3,
    borderBottomColor: '#696969',
    borderBottomWidth: 1 / PixelRatio.get(),
    textAlignVertical: 'top'
  }
})

class AddReviewForm extends React.Component {
  state = {
    title: '',
    text: '',
    cur_brand: 'Другой',
    cur_country: 'Другая',
    image: null,
    image2: null,
    image3: null,
    sending: false
  }

  render () {
    const {
      props: {
        brands,
        country
      },
      state: {
        title,
        text,
        cur_brand,
        cur_country,
        image,
        image2,
        image3,
        sending
      },
      submit,
      _pickImage
    } = this
    const item_brands = _.map(brands, ({Name, Id}) => {
      return {
        value: Name,
        id: Id
      }
    })
    const item_country = _.map(country, ({Name, Id}) => {
      return {
        value: Name,
        id: Id
      }
    })
    return (
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.inputs}
          onChangeText={(title => this.setState({title}))}
          value={title}
          placeholder={'Заголовок'}
        />
        <Dropdown
          label={'Выберете Бренд'}
          data={item_brands}
          value={cur_brand}
          onChangeText={(val) => this.setState({cur_brand: val})}
        />
        <Dropdown
          label={'Выберете Страну'}
          data={item_country}
          value={cur_country}
          onChangeText={(val) => this.setState({cur_country: val})}
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(text => this.setState({text}))}
          value={text}
          multiline={true}
          numberOfLines={8}
          placeholder={'Ваш отзыв'}
        />
        <View
          style={{flex: 1, flexDirection: 'row', justifyItems: 'center', justifyContent: 'center', marginTop: 5}}>
          <View >
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              {
                image ? <Image source={{uri: image.uri}}
                               style={{width: 100, height: 100, marginLeft: 10, marginBottom: 10}} />
                  : <AddImageButton
                    click={() => {_pickImage('image')}}
                    style={{
                      marginBottom: 20
                    }}
                  />
              }
              {
                image2 ? <Image source={{uri: image2.uri}}
                               style={{width: 100, height: 100, marginLeft: 10, marginBottom: 10}} />
                  : <AddImageButton
                    click={() => {_pickImage('image2')}}
                    style={{
                      marginBottom: 20
                    }}
                  />
              }
              {
                image3 ? <Image source={{uri: image3.uri}}
                               style={{width: 100, height: 100, marginLeft: 10, marginBottom: 10}} />
                  : <AddImageButton
                    click={() => {_pickImage('image3')}}
                    style={{
                      marginBottom: 20
                    }}
                  />
              }
            </View>
            <RkButton
              onPress={submit}
            >Отправить</RkButton>
          </View>
        </View>
      </ScrollView>
    )
  }

  submit = () => {
    const {
      state: {
        image
      },
      _submit
    } = this
    if (!image) {
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
        image,
        image2,
        image3
      },
      props: {
        addReview,
        brands,
        country
      },
      imageCorrect
    } = this

    let countryId = _.find(country, ({Id, Name}) => Name === cur_country)
    countryId = countryId ? countryId.Id : 0

    let brandId = _.find(brands, ({Id, Name}) => Name === cur_brand)
    brandId = brandId ? brandId.Id : 0

    const images = [
      image && imageCorrect(image),
      image2 && imageCorrect(image2),
      image3 && imageCorrect(image3)
    ]

    const data = {
      Title: title,
      Text: text,
      BrandId: brandId,
      CountryId: countryId,
      Data: new Date().toString(),
      Active: false,
      Image: images[0] && images[0].name || 'default',
      Image2: images[1] && images[1].name || 'default',
      Image3: images[2] && images[2].name || 'default'
    }

    addReview(
      data, images
    )
    this.setState({
      title: '',
      text: '',
      cur_brand: 'Другой',
      cur_country: 'Другая',
      image: null,
      image2: null,
      image3: null
    })
  }

  _pickImage = async (image) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.1
    })
    if (!result.cancelled) {
      this.setState({[image]: result})
    }
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