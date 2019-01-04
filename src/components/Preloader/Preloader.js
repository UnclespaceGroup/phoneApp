import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Preloader extends Component{

  render(){
    return(
      <View>
        <Text>Загрузка данных с сервера</Text>
      </View>
    )
  }
}
export default Preloader
