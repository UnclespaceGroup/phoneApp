import React, { Component, PureComponent } from 'react'
import { RkButton } from 'react-native-ui-kitten'
import { View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  button: {},
  container: {
    padding: 4
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
      <View style={style.container} >
        <RkButton
          style={style.button}
          onPress={() => {
            click(name, Id)
          }}
          rkType={active ? 'primary': 'outline'}
        >
          {Name}
        </RkButton>
      </View>
    )
  }
}
export default CheckBoxItem
