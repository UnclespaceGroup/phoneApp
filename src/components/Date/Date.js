import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { correctDate } from '../../utils'

class Date extends Component {
  render() {
    const {
      props: {
        children
      }
    } = this
    const current = correctDate(children)
    return (
      <View style={s.container}>
        <Text>
          {current.day + ' ' + current.month + ' ' + current.year + ' '}
          <Text style={s.time}>{current.time}</Text>
        </Text>
      </View>
    )
  }
}
const s = StyleSheet.create({
  container: {
    opacity: 0.5
  },
  time: {
    opacity: 0.2
  }
})
export default Date
