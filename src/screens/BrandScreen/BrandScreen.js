import React from 'react'
import {ScrollView, View} from 'react-native'
import styles from './scss/style.scss'
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
      <ScrollView style={styles.wrap}>
        <BrandList {...{setFilter,brands}} />
      </ScrollView>
    )
  }
}

export default BrandScreen
