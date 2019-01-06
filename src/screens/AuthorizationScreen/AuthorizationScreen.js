import React from 'react'
import { View, Text } from 'react-native'
import styles from './scss/style.scss'
import { RkButton, RkTextInput } from 'react-native-ui-kitten'
import { SocialIcon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import AuthGoogle from '../../components/AuthenticationComponents/AuthGoogle'

class AuthorizationScreen extends React.Component {
  render () {
    const {
      logIn,
      logOut,
      profile
    } = this.props
    return (
      <View>
        <Text style={styles.title}>Регистрация</Text>
        <AuthGoogle {...{logIn, logOut, profile}} />
        <View style={styles.wrapper}>
          <RkButton rkType={'outline'}
                    style={styles.button}
                    onPress={() => Actions.forum()}>Регистрация
          </RkButton>
          <Text style={{textAlign: 'center', paddingTop: 5, fontSize: 10}}>
            Ваши данные не попадут в третьи руки
          </Text>
          <Text style={styles.hr}> или</Text>
          <View style={styles.social}>
            <SocialIcon type='twitter' />
            <SocialIcon type='instagram' />
            <SocialIcon type='facebook' />
          </View>
        </View>
      </View>
    )
  }
}

export default AuthorizationScreen