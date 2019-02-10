import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'
import s from './style'
import AuthGoogleStandalone from '../../components/AuthenticationComponents/AuthGoogleStandalone'

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
              <AuthGoogleStandalone  {...{Register,logIn, logOut, profile, users, downloadUsers}} />
              <TouchableOpacity onPress={() => Actions.forum()}>
                <Text style={s.enter}>Войти без авторизации</Text>
              </TouchableOpacity>
            </View>
        )
    }
}

export default AuthorizationScreen