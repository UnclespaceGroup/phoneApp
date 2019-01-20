import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import ForumScreen from '../../screens/ForumScreen/ForumScreen'

class Forum extends Component{
  render(){
    const {
      props: {
        filter,
        reviews,
        currentCountry,
        currentBrand
      }
    } = this
    return(
      <ForumScreen {...{ filter, currentCountry, currentBrand, reviews}} />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    filter: state.interiorReducer.filter,
    reviews: state.downloadReducer.reviews,
    profile: state.interiorReducer.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forum)