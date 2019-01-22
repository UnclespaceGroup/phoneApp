import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import _ from 'lodash'
import CheckBoxItem from './CheckBoxItem'

class CheckBoxBlock extends Component{
  render() {
    const {
      props: {
        items
      },
      inCorrectArray
    } = this
    let array = inCorrectArray(items)
    return(
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
    let array = []
    console.log(items)
    for (let i = 0; i < (items.length - 3); i+=3){
      console.log(items[i])
      console.log(items[i + 1])
      console.log(items[i + 2])
      array.push(
        <View>
          <CheckBoxItem>{items[i].Name}</CheckBoxItem>
          <CheckBoxItem>{items[i + 1].Name}</CheckBoxItem>
          <CheckBoxItem>{items[i + 2].Name}</CheckBoxItem>
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
