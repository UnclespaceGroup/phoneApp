import React, { Component } from 'react'
import AuthorizationScreen from '../../screens/AuthorizationScreen/AuthorizationScreen'
import { bindActionCreators } from 'redux'
import { downloadCountry, downloadReview, getData, setFilter } from '../../actions'
import { connect } from 'react-redux'

class Authorization extends Component {
  componentDidMount(){
    const {
      downloadCountry,
      downloadReview
    } = this.props
    downloadCountry()
    downloadReview()
  }
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
    setFilter: bindActionCreators(setFilter, dispatch),
    downloadCountry: bindActionCreators(downloadCountry, dispatch),
    downloadReview: bindActionCreators(downloadReview, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
