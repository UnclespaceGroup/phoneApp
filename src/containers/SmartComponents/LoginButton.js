import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData } from '../../actions'
import { connect } from 'react-redux'
import TopLoginButton from '../../components/TabIcons/TopLoginButton'

class LoginButton extends Component {
  render () {
    const {
      props: {
        ...props
      }
    } = this
    return (
      <TopLoginButton {...props} />
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
    getData: bindActionCreators(getData, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
