import React, { Component, PureComponent } from 'react'
import { RkButton } from 'react-native-ui-kitten'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { custom, colors } from '../../global'

const s = StyleSheet.create({
  button: {
    borderRadius: 20,
    borderColor: colors.reda
  },
  button_active: {
    borderRadius: 20
  },
  container: {
    padding: 4,
    backgroundColor: custom.white
  },
  icon: {
    width: 3,
    height: 3
  },
  text: {
    color: colors.reda
  },
  text_active: {
    color: 'white'
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
          style={active ? s.button_active : s.button}
          onPress={() => {
            click(name, Id)
          }}
          rkType={active ? 'danger': 'outline red'}
        >
          <Text style={active ? s.text_active : s.text}>{Name}</Text>
        <View style={{marginLeft: 10}}>{active && <Icon size={15} name={'check'} color={'white'} />}</View>
        </RkButton>
      </View>
    )
  }
}
export default CheckBoxItem
