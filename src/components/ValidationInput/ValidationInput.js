import React, { Component } from 'react'
import { View, TextInput, Text} from 'react-native'
import classNames from 'react-native-classnames'
import s from './style'

class ValidationInput extends Component {
  state = {
    valid: true,
    intact: true
  }
  componentWillReceiveProps(props) {
    const { intact, value } = props
    if (!intact)
    this.setState({
      intact,
      valid: this.Check(value)
    })
  }

  render() {
    const {
      props: {
        placeholder,
        validation,
        name,
        value,
        onChange,
        ...props
      },
      state: {
        valid,
        intact
      },
      change
    } = this
    return(
      <View>
        <TextInput
          style={classNames(s, {inputError: !valid}, {inputSuccess: (valid && !intact)}, { defaultInput: intact})}
          onChangeText={change}
          value={value}
          placeholder={placeholder}
          {...props}
        />
        {
          !valid &&
            <Text style={s.text}>{'Некорректная запись'}</Text>
        }
      </View>
    )
  }
  change = (e) => {
    const current = e
    const {
      state: {
        valid
      },
      props: {
        onChange,
        name,
        isValid
      },
      Check
    } = this
    this.setState({
      valid: Check(current),
      intact: false
    })
    onChange(name, current, Check(current))
  }
  static defaultProps = {
    validation: {
      minSize: 0,
      maxSize: 100,
      numbersOnly: false
    },
    intact: true
  }
  Check = (text = '') => {
    const {
      validation
    } = this.props
    return (
      text.length > validation.minSize
      && text.length < validation.maxSize
      && ( validation.numbersOnly ? text.match(/^\d+$/) : true )
    )
  }

}
export default ValidationInput
