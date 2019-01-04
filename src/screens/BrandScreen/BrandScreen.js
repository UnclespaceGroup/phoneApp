import React from 'react'
import { View } from 'react-native'
import styles from './scss/style.scss'
import CountryList from '../../components/CountryList/CountryList'
import BrandList from '../../components/BrandList/BrandList'

class BrandScreen extends React.Component {
  render () {
    const {
      props: {
        setFilter,
        brands
      }
    } = this
    return (
      <View style={styles.wrap}>
        <BrandList {...{setFilter,brands}} />
      </View>
    )
  }
}

export default BrandScreen