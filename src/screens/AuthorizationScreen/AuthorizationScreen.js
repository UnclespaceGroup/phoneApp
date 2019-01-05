import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './scss/style.scss'
import {RkButton, RkTextInput} from 'react-native-ui-kitten'
import {SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import CommentAdd from "../../components/Comment/CommentAdd";
import background from '../../static/backgroundAuto.jpg'

class AuthorizationScreen extends React.Component {
    render() {
        const {
            product
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
                <Text style={styles.bottom__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae quam quis orci convallis eleifend.</Text>
            </ImageBackground>
        )
    }
}

export default AuthorizationScreen