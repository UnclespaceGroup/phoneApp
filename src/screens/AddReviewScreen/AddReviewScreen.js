import React from 'react'
import { View } from 'react-native'
import styles from './scss/style.scss'
import AddReviewForm from '../../components/AddReviewForm/AddReviewForm'

class AddReviewScreen extends React.Component {
  render () {
    const {
      props: {
        addReview,
        brands,
        country
      }
    } = this
    return (
      <View style={styles.wrap}>
        <AddReviewForm {...{addReview, brands,country}} />
      </View>
    )
  }
}

export default AddReviewScreen