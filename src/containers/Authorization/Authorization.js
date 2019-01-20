import React, { Component } from 'react'
import AuthorizationScreen from '../../screens/AuthorizationScreen/AuthorizationScreen'
import { bindActionCreators } from 'redux'
import { logIn, logOut } from '../../actions'
import { connect } from 'react-redux'

class Authorization extends Component {
  render () {
    const {
      logIn,
      logOut,
      profile
    } = this.props
    return (
      <AuthorizationScreen {...{logIn, logOut, profile}} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.interiorReducer.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: bindActionCreators(logIn, dispatch),
    logOut: bindActionCreators(logOut, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
