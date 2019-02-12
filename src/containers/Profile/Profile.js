import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, logOut } from '../../actions'
import { connect } from 'react-redux'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
import { deleteMarker, setMarker } from '../../actions/actionAdd'

class Profile extends Component {
  render () {
    const {
      props: {
        ...props
      }
    } = this
    return (
      <ProfileScreen {...props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.interiorReducer.filter,
    profile: state.interiorReducer.profile,
    reviews: state.downloadReducer.reviews,
    country: state.downloadReducer.country,
    brands: state.downloadReducer.brands
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    logOut: bindActionCreators(logOut, dispatch),
    deleteMarker: bindActionCreators(deleteMarker, dispatch),
    setMarker: bindActionCreators(setMarker, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
