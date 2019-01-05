import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import logo from '../../static/mix_04.jpg'
class Preloader extends Component{

  render(){
    return(
      <View
          style={{backgroundColor: '#ffffff', width: '100%', height: '100%',justifyContent: 'center',
            alignItems: 'center' }}>
        <Image source={logo} style={{margin: 'auto', marginTop: '20%'}}/>
        <Text style={{textAlign: 'center'}}>Загрузка данных с сервера</Text>
      </View>
    )
  }
}
export default Preloader
