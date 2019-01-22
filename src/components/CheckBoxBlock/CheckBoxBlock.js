import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import _ from 'lodash'
import CheckBoxItem from './CheckBoxItem'

class CheckBoxBlock extends Component {
  render () {
    const {
      props: {
        items
      },
      inCorrectArray
    } = this
    let array = inCorrectArray(items)
    return (
      <View>
        <ScrollView
          horizontal
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
    for (let i = 0; i < (items.length); i += 3) {
      array.push(
        <View>
          {
            items[i] && <CheckBoxItem {...{click, name, ...items[i]}} />}
          {
            items[i + 1] && <CheckBoxItem {...{click, name, ...items[i + 1]}} />
          }
          { items[i + 2] && <CheckBoxItem {...{click, name, ...items[i + 2]}} />}
        </View>
      )
    }
    return array
  }
  static defaultProps = {
    items: []
  }
}

export default CheckBoxBlock
