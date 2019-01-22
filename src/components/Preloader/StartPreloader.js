import React, { Component } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import background from '../../static/backgroundAuto.jpg'
import Authorization from '../../containers/Authorization'
import styles from '../../screens/AuthorizationScreen/scss/style.scss'
import Spinner from 'react-native-loading-spinner-overlay'

class StartPreloader extends Component {

  render () {
    const {
      allReady
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
          allReady ?
            <Authorization />
            : <View>
              <Spinner
                visible={!allReady}
                textContent={'Загрузка данных с сервера...'}
                textStyle={{
                  color: 'white',
                  fontSize: 12
                }}
              />
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
