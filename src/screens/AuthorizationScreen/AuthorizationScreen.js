import React from 'react';
import {View, Text} from 'react-native';
import styles from './scss/style.scss'
import {RkButton, RkTextInput} from 'react-native-ui-kitten';
import {SocialIcon} from 'react-native-elements';
import {Actions} from "react-native-router-flux";

export default class AuthorizationScreen extends React.Component {


    render() {
        return (
            <View>
                <Text style={styles.title}>Регистрация</Text>
                <View>
                    <RkTextInput rkType='rounded' style={styles.input}
                                 placeholder='E-mail'/>
                    <RkTextInput rkType='rounded' style={styles.input}
                                 placeholder='Пароль'
                                 secureTextEntry={true}/>
                    <RkTextInput rkType='rounded' style={styles.input}
                                 placeholder='Повторите пароль'
                                 secureTextEntry={true}/>
                </View>
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
                        <SocialIcon type='twitter'/>
                        <SocialIcon type='instagram'/>
                        <SocialIcon type='facebook'/>
                    </View>
                </View>
            </View>
        )
    }
}
