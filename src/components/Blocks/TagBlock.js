import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import _ from 'lodash'
import { RkButton } from 'react-native-ui-kitten'

const colors = [
  'success', 'danger', 'info', 'warning', 'primary'
]


class TagBlock extends Component{
  render(){
    const {
      props: {
        items,
        deleteTag
      }
    } = this
    return(
      <View style={s.container}>
        {
          _.map(items, (item, key) => <RkButton key={key} style={s.button} rkType={`small ${colors[key % colors.length]}`}>#{item}</RkButton>)
        }
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    margin: 10
  }
})

export default TagBlock
