import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { downloadCountry, downloadReview, getData, setFilter, downloadBrand, downloadComments } from '../../actions'
import { connect } from 'react-redux'
import StartPreloader from '../../components/Preloader/StartPreloader'
import { downloadUsers } from '../../actions/actionDownload'

class Entry extends Component {
  componentDidMount () {
    const {
      downloadCountry,
      downloadReview,
      downloadBrand,
      downloadUsers,
      downloadComments
    } = this.props
    downloadCountry()
    downloadReview()
    downloadBrand()
    downloadUsers()
    downloadComments()
  }

  render () {
    const {
      props: {
        ready,
        ...props
      }
    } = this
    const allReady = ready.review && ready.country && ready.brand && ready.users
    return (
        <StartPreloader {...{...props, allReady}} />
    )
  }
  static defaultProps = {
    ready: {
      review: false,
      country: false,
      brand: false,
      users: false
    }
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
    downloadBrand: bindActionCreators(downloadBrand, dispatch),
    downloadUsers: bindActionCreators(downloadUsers, dispatch),
    downloadComments: bindActionCreators(downloadComments, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Entry)
