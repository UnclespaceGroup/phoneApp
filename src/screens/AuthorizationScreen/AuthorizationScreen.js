import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import styles from './scss/style.scss'
import {SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import s from './style'

import AuthGoogle from '../../components/AuthenticationComponents/AuthGoogle'

class AuthorizationScreen extends React.Component {
    render() {
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
              <AuthGoogle {...{Register,logIn, logOut, profile, users, downloadUsers}} />
              <TouchableOpacity onPress={() => Actions.forum()}>
                <Text style={s.enter}>Войти без авторизации</Text>
              </TouchableOpacity>
            </View>
        )
    }
}

export default AuthorizationScreen