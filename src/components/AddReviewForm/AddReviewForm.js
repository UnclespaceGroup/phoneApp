import React from 'react'
import { View, ScrollView, TextInput, StyleSheet, Alert, PixelRatio, Image } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { Dropdown } from 'react-native-material-dropdown'
import _ from 'lodash'
import { ImagePicker } from 'expo'

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
        image
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
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <RkButton
            onPress={_pickImage}
            style={{backgroundColor: 'green'}}
          >Добавить изображени</RkButton>
          <RkButton onPress={submit}>Отправить</RkButton>
        </View>
        {
          image && <Image source={{uri: image.uri}} style={{width: 200, height: 200}} />
        }
      </ScrollView>
    )
  }

  submit = () => {
    const {
      state: {
        title,
        text,
        cur_brand,
        cur_country,
        image
      },
      props: {
        addReview,
        brands,
        country
      }
    } = this

    let countryId = _.find(country, ({Id, Name}) => Name === cur_country)
    countryId = countryId ? countryId.Id : 0

    let brandId = _.find(brands, ({Id, Name}) => Name === cur_brand)
    brandId = brandId ? brandId.Id : 0

    const data = {
      Title: title,
      Text: text,
      BrandId: brandId,
      CountryId: countryId,
      Data: new Date().toString(),
      Active: false,
    }

    addReview({
      data, image
    })
    this.setState({
      title: '',
      text: '',
      cur_brand: 'Другой',
      cur_country: 'Другая'
    })
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    console.log(result)
    if (!result.cancelled) {
      this.setState({image: result})
    }
  }
}

export default AddReviewForm