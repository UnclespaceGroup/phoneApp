import React, { Component } from 'react'
import AuthorizationScreen from '../../screens/AuthorizationScreen/AuthorizationScreen'
import { bindActionCreators } from 'redux'
import { downloadCountry, downloadReview, getData, setFilter, downloadBrand } from '../../actions'
import { connect } from 'react-redux'
import Preloader from '../../components/Preloader/Preloader'

class Entry extends Component {
  componentDidMount () {
    const {
      downloadCountry,
      downloadReview,
      downloadBrand
    } = this.props
    downloadCountry()
    downloadReview()
    downloadBrand()
  }

  render () {
    const {
      props: {
        ready,
        ...props
      }
    } = this
    const allReady = ready.review && ready.country && ready.brand
    console.log(allReady)
    return (
      allReady ? <AuthorizationScreen {...props} />
        : <Preloader />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    filter: state.filter,
    ready: state.ready
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch),
    downloadCountry: bindActionCreators(downloadCountry, dispatch),
    downloadReview: bindActionCreators(downloadReview, dispatch),
    downloadBrand: bindActionCreators(downloadBrand, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Entry)
