import React from 'react'
import { View } from 'react-native'
import styles from './scss/style.scss'
import CountryList from '../../components/CountryList/CountryList'

class CountryScreen extends React.Component {
  render () {
    const {
      props: {
        products
      }
    } = this
    return (
      <View style={styles.wrap}>
        <CountryList {...{products}} />
      </View>
    )
  }
}

export default CountryScreen