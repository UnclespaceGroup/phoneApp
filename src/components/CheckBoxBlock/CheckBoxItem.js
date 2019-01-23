import React, { Component, PureComponent } from 'react'
import { RkButton } from 'react-native-ui-kitten'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'


const s = StyleSheet.create({
  button: {
    borderRadius: 5
  },
  container: {
    padding: 4
  },
  icon: {
    width: 3,
    height: 3
  }
})

class CheckBoxItem extends PureComponent{
  render() {
    const {
      props: {
        active,
        click,
        Id,
        name,
        Name
      }
    } = this
    return(
      <View style={s.container} >
        <RkButton
          style={s.button}
          onPress={() => {
            click(name, Id)
          }}
          rkType={active ? 'primary': 'outline'}
        >
          {Name}
        <View style={{marginLeft: 10}}><Icon size={15} name={active ? 'check': ''} color={'white'} /></View>
        </RkButton>
      </View>
    )
  }
}
export default CheckBoxItem
