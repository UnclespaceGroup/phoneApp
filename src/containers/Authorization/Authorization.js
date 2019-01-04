import React, { Component } from 'react'
import AuthorizationScreen from '../../screens/AuthorizationScreen/AuthorizationScreen'
import { bindActionCreators } from 'redux'
import { downloadCountry, downloadReview, getData, setFilter, downloadBrand } from '../../actions'
import { connect } from 'react-redux'

class Authorization extends Component {
  render () {
    const {
      props: {
        ...props
      }
    } = this
    return (
      <AuthorizationScreen {...props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
