import { Component } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from 'react-native-elements'
import React from 'react'

class AddImageButton extends Component {
  render () {
    const color = this.props.selected ? '#00f240' : '#301c2a'
    const {
      props: {
        click
      }
    } = this
    return (
      <TouchableOpacity onPress={click}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          marginBottom: 10
        }}>
          <Icon style={{color: color}} name={'file-photo-o'} size={60} />
          <Text>Добавить фото</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default AddImageButton
