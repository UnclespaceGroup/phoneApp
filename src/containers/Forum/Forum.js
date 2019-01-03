import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import ForumScreen from '../../screens/ForumScreen/ForumScreen'

class Forum extends Component{
  render(){
    const {
      props: {
        products,
        filter,
        reviews,
        currentCountry
      }
    } = this
    return(
      <ForumScreen {...{products, filter, currentCountry, reviews}} />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    filter: state.filter,
    reviews: state.reviews
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forum)