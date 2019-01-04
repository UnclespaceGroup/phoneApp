import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { addReview } from '../../actions'
import { connect } from 'react-redux'
import AddReviewScreen from '../../screens/AddReviewScreen/AddReviewScreen'

class AddReview extends Component{
  render(){
    const {
      addReview,
      brands,
      country
    } = this.props
    return(
      <AddReviewScreen {...{addReview, brands, country}}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    brands: state.brands,
    country: state.country
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addReview: bindActionCreators(addReview, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
