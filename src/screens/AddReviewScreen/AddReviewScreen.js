import React from 'react'
import { ScrollView } from 'react-native'
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
        preloader,
        ...props
      }
    } = this
    return (
      <ScrollView style={styles.wrap}>
        {
          preloader && <Spinner visible />
        }
        <AddReviewForm {...{addReview, brands,country, ...props}} />
      </ScrollView>
    )
  }
}

export default AddReviewScreen