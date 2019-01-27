import React from 'react'
import {View, Text } from 'react-native'
import styles from './scss/style.scss'
import {SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

import AuthGoogle from '../../components/AuthenticationComponents/AuthGoogle'

class AuthorizationScreen extends React.Component {
    render() {
        const {
          logIn,
          logOut,
          profile,
          Register,
          users
        } = this.props
      return (
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

                <View style={styles.wrapper}>
                    <Text style={styles.hr}>Авторизуйтесь с помощью</Text>
                    <View style={styles.social}>
                        <SocialIcon type='google-plus-official' />
                        <SocialIcon type='instagram' onPress={() => Actions.forum()}/>
                        <SocialIcon type='facebook'/>
                    </View>
                </View>
              <Text
                style={{
                  color: 'white',
                  marginBottom: 25
                }}
              >Или</Text>
              <AuthGoogle {...{Register,logIn, logOut, profile, users}} />
            </View>
        )
    }
}

export default AuthorizationScreen