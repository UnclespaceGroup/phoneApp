import { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from 'react-native-elements'
import React from 'react'
import { Actions } from 'react-native-router-flux'

class TopLoginButton extends Component {
  render () {
    const color = this.props.selected ? '#00f240' : '#301c2a'
    const {
      click
    } = this
    return (
      <TouchableOpacity onPress={click}>
        <View style={{
          marginRight: 10,
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center'
        }}>
          <Icon style={{color: color}} name={'user'} size={25} />
        </View>
      </TouchableOpacity>
    )
  }
  click = () => {
    Actions.push('authorization')
  }
}

export default TopLoginButton
