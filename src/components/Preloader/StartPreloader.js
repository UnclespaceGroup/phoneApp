import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import background from '../../static/backgroundAuto.jpg'
import Authorization from '../../containers/Authorization'
import styles from '../../screens/AuthorizationScreen/scss/style.scss'
import Spinner from 'react-native-loading-spinner-overlay'
import logo from '../../../assets/logo.png'
import { Actions } from 'react-native-router-flux'
import s from '../../screens/AuthorizationScreen/style'

class StartPreloader extends Component {

  componentWillReceiveProps (props) {
    if (props.profile)
      Actions.push('tabs')
  }

  render () {
    const {
      allReady,
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
        {
          !allReady ?
            <Spinner
              visible={!allReady}
              textContent={'Загрузка данных с сервера...'}
              textStyle={{
                color: 'white',
                fontSize: 12
              }}
            />
            : profile ?
            <TouchableOpacity
              onPress={() => {Actions.push('tabs')}}
              style={{height: 600, width: '100%'}}
            >
              <View style={{height: 600, width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={logo}
                       style={{
                         width: 120,
                         height: 120,
                         borderRadius: 40
                       }}
                />

                <Text style={{color: 'white'}}>Войти</Text>
              </View>
            </TouchableOpacity>
            :
            <View style={{height: 600}}>
              <Authorization />
            </View>
        }
        <Text style={styles.bottom__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae quam
          quis orci convallis eleifend.
        </Text>
      </ImageBackground>
    )
  }
}

export default StartPreloader
