import React, { Component } from 'react'
import { GoogleSignIn } from 'expo'
import { AppAuth } from 'expo-app-auth'
import { Alert, View } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'

class CustomAuth extends Component {
  render () {
    return (
      <View>
        <RkButton onPress={this.click}>Тест</RkButton>
      </View>
    )
  }
  click = () => {
    const { URLSchemes } = AppAuth
    Alert.alert('warning', URLSchemes.toString())
  }
}
export default CustomAuth
