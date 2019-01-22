import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import _ from 'lodash'
import CheckBoxItem from './CheckBoxItem'

const s = StyleSheet.create({
  title: {
    fontSize: 20,
    paddingLeft: 10
  },
  container: {
    paddingBottom: 10
  },
  block: {
    marginBottom: 30,
    paddingBottom: 10,
    paddingTop: 10
  },
})

class CheckBoxBlock extends Component {
  render () {
    const {
      props: {
        items,
        title
      },
      inCorrectArray
    } = this
    let array = inCorrectArray(items)
    return (
      <View>
        <Text style={s.title}>{title}</Text>
        <ScrollView
          horizontal
          style={s.block}
        >
          {
            _.map(array, (item, key) =>
              <View key={key}>
                {item}
              </View>
            )
          }
        </ScrollView>
      </View>
    )
  }

  inCorrectArray = (items) => {
    const {click, name} = this.props
    let array = []
    if (items.length <= 5){
      array = _.map(items, (item, key) => <CheckBoxItem key={key} {...{click, name, ...item}} />)
    }
    else {
      for (let i = 0; i < (items.length); i += 3) {
        array.push(
          <View>
            {
              items[i] && <CheckBoxItem {...{click, name, ...items[i]}} />}
            {
              items[i + 1] && <CheckBoxItem {...{click, name, ...items[i + 1]}} />
            }
            {items[i + 2] && <CheckBoxItem {...{click, name, ...items[i + 2]}} />}
          </View>
        )
      }
    }
    return array
  }
  static defaultProps = {
    items: []
  }
}

export default CheckBoxBlock
