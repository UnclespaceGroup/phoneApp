import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './scss/style.scss'
import {SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import background from '../../static/backgroundAuto.jpg'
import AuthGoogle from '../../components/AuthenticationComponents/AuthGoogle'

class AuthorizationScreen extends React.Component {
    render() {
        const {
          logIn,
          logOut,
          profile
        } = this.props
        return (
            <ImageBackground
                source={background}
                style={{
                    backgroundColor: '#ccc',
                    flex: 1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                <Text style={styles.title}>𝓜𝓪𝓴𝓮𝓐𝓟𝓟</Text>
                <View style={styles.wrapper}>
                    <Text style={styles.hr}>Авторизуйтесь с помощью</Text>
                    <View style={styles.social}>
                        <SocialIcon type='google-plus-official' />
                        <SocialIcon type='instagram' onPress={() => Actions.forum()}/>
                        <SocialIcon type='facebook'/>
                    </View>
                </View>
              <AuthGoogle {...{logIn, logOut, profile}} />
                <Text style={styles.bottom__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae quam quis orci convallis eleifend.</Text>
            </ImageBackground>
        )
    }
}

export default AuthorizationScreen