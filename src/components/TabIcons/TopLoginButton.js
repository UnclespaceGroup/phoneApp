import { Component } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from 'react-native-elements'
import React from 'react'
import { Actions } from 'react-native-router-flux'
import { colors, custom } from '../../global'

class TopLoginButton extends Component {
  render () {
    const color = this.props.selected ? '#00f240' : '#301c2a'
    const {
      props: {
        profile
      },
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
          {
            profile ?
              <Image
                source={{uri: profile.Avatar}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderColor: colors.red,
                  borderWidth: 1
                }}
              />
            : <Icon style={{color: color}} name={'user'} size={25} />
          }
        </View>
      </TouchableOpacity>
    )
  }
  click = () => {
    Actions.push('profile')
  }
}

export default TopLoginButton
