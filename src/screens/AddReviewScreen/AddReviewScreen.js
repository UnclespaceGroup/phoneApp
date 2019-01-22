import React from 'react'
import { View } from 'react-native'
import styles from './scss/style.scss'
import AddReviewForm from '../../components/AddReviewForm/AddReviewForm'
import Spinner from 'react-native-loading-spinner-overlay'

class AddReviewScreen extends React.Component {
  render () {
    const {
      props: {
        addReview,
        brands,
        country,
        preloader
      }
    } = this
    return (
      <View style={styles.wrap}>
        {
          preloader && <Spinner visible />
        }
        <AddReviewForm {...{addReview, brands,country}} />
      </View>
    )
  }
}

export default AddReviewScreen