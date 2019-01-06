import React from 'react'
import { View, Text, Image } from 'react-native'
import * as Expo from 'expo'
import { RkButton } from 'react-native-ui-kitten'

const CLIENT_ID = '15528245861-ks5jqvbu4nr8d0m54o7n5rjunr063epr.apps.googleusercontent.com'

class AuthGoogle extends React.Component {
  state = {
    signedIn: false,
    name: '',
    photoUrl: ''
  }

  render () {
    const {
      props: {
        logOut,
        profile
      },
      signIn
    } = this
    return (
      <View >
        {
          profile ?
            <View >
              <Text>{profile.name}</Text>
              <Image
                source={{uri: profile.photoUrl}}
                style={{
                  width: 70,
                  height: 70
                }}
              />
              <RkButton onPress={logOut}>Выйти</RkButton>
            </View> :
            <View style={{height: 100}}>
              < RkButton
                style={{
                  width: 240,
                  height: 50
                }}
                onPress={signIn}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    left: 0,
                    marginRight: 30
                  }}
                  source={{uri: 'http://wordpresse.ru/wp-content/uploads/2017/06/plus-678x381.jpg'}} />
                Войти через Google
              </RkButton>
            </View>
        }
      </View>
    )
  }

  signIn = async () => {
    const {
      logIn
    } = this.props
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: CLIENT_ID,
        iosClientId: CLIENT_ID,
        scopes: ['profile', 'email'],
      })
      if (result.type === 'success') {
        logIn({
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          email: result.user.email
        })
        return result.accessToken
      } else {
        return {cancelled: true}
      }
    } catch (e) {
      return {error: true}
    }
  }
}

export default AuthGoogle