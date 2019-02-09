import React from 'react'
import { View, Text, Image } from 'react-native'
import * as Expo from 'expo'
import { RkButton } from 'react-native-ui-kitten'
import _ from 'lodash'
import { Log } from '../../actions/actionAdd'

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
        profile,
        users
      },
      signIn
    } = this
    return (
      <View>
        {
          profile ?
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View>
                <Image
                  source={{uri: profile.avatar}}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35
                  }}
                />
              </View>
              <View>
                <Text style={{color: 'white', fontSize: 20}}>{profile.name}</Text>
                <RkButton onPress={logOut}>Выйти</RkButton>
              </View>
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
      props: {
        logIn,
        Register,
        users,
        downloadUsers
      },
      enableToken
    } = this
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: CLIENT_ID,
        iosClientId: CLIENT_ID,
        scopes: ['profile', 'email'],
      })
      if (result.type === 'success') {
        if (enableToken(result.user.id)) {
          logIn({
            Name: result.user.name,
            Avatar: result.user.photoUrl,
            Email: result.user.email,
            Token: result.user.id
          })
        }
        else {
          Register({
            Name: result.user.name,
            Avatar: result.user.photoUrl,
            Email: result.user.email,
            Token: result.user.id
          })
          downloadUsers()
        }
        return result.accessToken
      } else {

        return {cancelled: true}
      }
    } catch (e) {
      Log(e.toString())
      return {error: true}
    }
  }
  enableToken = (token) => {
    const {
      users
    } = this.props
    return _.find(users, ({Token}) => Token === token)
  }
}

export default AuthGoogle