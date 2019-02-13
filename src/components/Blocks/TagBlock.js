import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import _ from 'lodash'
import { RkButton } from 'react-native-ui-kitten'
import { colors } from '../../global'

// const colors = [
//   'success', 'danger', 'info', 'warning', 'primary'
// ]

const color = [
  colors.reda, colors.redb, colors.reda, colors.redb, colors.reda
]

class TagBlock extends Component {
  render () {
    const {
      props: {
        items,
        deleteTag
      }
    } = this
    return (
      <View style={s.container}>
        {
          _.map(items, (item, key) =>
            <RkButton key={key}
                      style={{
                        backgroundColor: color[key % color.length],
                        margin: 2
                      }}
                      rkType={`small ${color[key % color.length]}`}><Text style={{color: 'white'}}>#{item}</Text></RkButton>)
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
