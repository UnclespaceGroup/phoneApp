import React from 'react'
import { View, TextInput } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'

class AddReviewForm extends React.Component {
  state = {
    title: '',
    text: ''
  }
  render () {
    const {
      state: {
        title,
        text
      },
      submit
    } = this
    return (
      <View >
        <TextInput onChangeText={(title => this.setState({title}))} value={title} />
        <TextInput onChangeText={(text => this.setState({text}))} value={text} />
        <RkButton onPress={submit}>Отправить</RkButton>
      </View>
    )
  }
  submit = () => {
    const {
      state: {
        title,
        text
      },
      props: {
        addReview
      }
    } = this
    addReview({
      title: title,
      text: text,
      data: new Date().toString(),
      active: false
    })
  }
}

export default AddReviewForm