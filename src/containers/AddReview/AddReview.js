import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { addReview } from '../../actions'
import { connect } from 'react-redux'
import AddReviewScreen from '../../screens/AddReviewScreen/AddReviewScreen'

class AddReview extends Component{
  render(){
    const {
      addReview
    } = this.props
    return(
      <AddReviewScreen {...{addReview}}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    filter: state.filter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addReview: bindActionCreators(addReview, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
