import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import s from './style'
import AuthGoogleStandalone from '../../components/AuthenticationComponents/AuthGoogleStandalone'
import logo from '../../../assets/logo.png'

class AuthorizationScreen extends React.Component {
  render () {
    const {
      logIn,
      logOut,
      profile,
      Register,
      users,
      downloadUsers
    } = this.props
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {
            <View style={{flex: 1, justifyContent: 'center'}}>
              <AuthGoogleStandalone  {...{Register, logIn, logOut, profile, users, downloadUsers}} />
              <TouchableOpacity onPress={() => Actions.forum()}>
              <Text style={s.enter}>Войти без авторизации</Text>
            </TouchableOpacity>
            </View>
        }
      </View>
    )
  }
}

export default AuthorizationScreen