import React from 'react'
import { View, ScrollView, TextInput, StyleSheet, Alert, PixelRatio } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { Dropdown } from 'react-native-material-dropdown'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'

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
    cur_country: 'Другая'
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
        cur_country
      },
      submit
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
          onChangeText={(val) =>  this.setState({cur_brand: val})}
        />
        <Dropdown
          label={'Выберете Страну'}
          data={item_country}
          value={cur_country}
          onChangeText={(val) =>  this.setState({cur_country: val})}
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(text => this.setState({text}))}
          value={text}
          multiline={true}
          numberOfLines={8}
          placeholder={'Ваш отзыв'}
        />
        <RkButton onPress={submit}>Отправить</RkButton>
      </ScrollView>
    )
  }
  submit = () => {
    const {
      state: {
        title,
        text,
        cur_brand,
        cur_country
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
      Active: false
    }

    // Alert.alert('Отправлено',
    //   data.Title + '\n' + data.Text + '\n' + data.CountryId + '\n' + data.BrandId + '\n' + data.Data
    // )
    addReview(
      data
    )
    this.setState({
      title: '',
      text: '',
      cur_brand: 'Другой',
      cur_country: 'Другая'
    })
  }
}

export default AddReviewForm