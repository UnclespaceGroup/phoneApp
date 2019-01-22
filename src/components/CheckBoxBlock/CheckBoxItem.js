import React, { Component } from 'react'
import { RkButton } from 'react-native-ui-kitten'
import { View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  button: {
    backgroundColor: 'white'
  },
  button_active: {
    backgroundColor: 'blue'
  },
  container: {
    padding: 2
  }
})


class CheckBoxItem extends Component{
  render() {
    const {
      props: {
        active,
        children
      }
    } = this
    console.log(children)
    return(
      <View style={style.container} >
        <RkButton
          rkType={active ? 'primary': 'outline'}
        >
          {children}
        </RkButton>
      </View>
    )
  }
}
export default CheckBoxItem
