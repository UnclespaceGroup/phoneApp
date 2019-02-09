import React, { Component } from 'react'
import { View, TextInput, Text} from 'react-native'

class ValidationInput extends Component {
  render() {
    const {
      placeholder,
      validation,
      name,
      value,
      onChange
    }
    return(
      <View>
        <TextInput
          onChange={(e) => { onChange(name, e.target.value)}}
        />
        <Text></Text>
      </View>
    )
  }
  change = (e) => {
    const {
      value
    } = this.props
  }

}
export default ValidationInput
