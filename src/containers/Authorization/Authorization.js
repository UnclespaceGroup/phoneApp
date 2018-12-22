import React, { Component } from 'react'
import AuthorizationScreen from '../../screens/AuthorizationScreen/AuthorizationScreen'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'

class Authorization extends Component {
  render() {
    const {
      ...props
    } = this.props
    return(
     <AuthorizationScreen {...props} />
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
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
