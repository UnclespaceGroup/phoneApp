import React from 'react'
import { View } from 'react-native'
import styles from './scss/style.scss'
import CountryList from '../../components/CountryList/CountryList'

class CountryScreen extends React.Component {
  render () {
    const {
      props: {
        setFilter,
        country
      }
    } = this
    return (
      <View style={styles.wrap}>
        <CountryList {...{setFilter, country}} />
      </View>
    )
  }
}

export default CountryScreen