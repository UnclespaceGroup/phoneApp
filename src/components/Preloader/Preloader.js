import React, { Component } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

class Preloader extends Component {
  render () {
    const {
      active,
      children
    } = this.props
    return (
      <View>
        {children}
        {
          active && <Spinner />
        }
      </View>
    )
  }
}
export default Preloader
