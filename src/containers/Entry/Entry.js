import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { downloadCountry, downloadReview, getData, setFilter, downloadBrand } from '../../actions'
import { connect } from 'react-redux'
import StartPreloader from '../../components/Preloader/StartPreloader'

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
    return (
        <StartPreloader {...{allReady}} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.interiorReducer.filter,
    ready: state.downloadReducer.ready,
    profile: state.interiorReducer.profile
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
