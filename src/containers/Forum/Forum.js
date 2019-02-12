import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {
  changeSearchSwitch,
  downloadBrand,
  downloadComments,
  downloadCountry,
  downloadReview,
  getData,
  setFilter
} from '../../actions'
import { connect } from 'react-redux'
import ForumScreen from '../../screens/ForumScreen/ForumScreen'
import FilteredForumScreen from '../../screens/ForumScreen/FilteredForumScreen'
import FilteredByTagsForumScreen from '../../screens/ForumScreen/FilteredByTagsForumScreen'
import { deleteMarker, setMarker } from '../../actions/actionAdd'

class Forum extends Component {
  render () {
    const {
      filtered,
      tags,
      ...props
    } = this.props
    return (
      tags ? <FilteredByTagsForumScreen {...{...props, tags}} /> :
      filtered ? <FilteredForumScreen {...props} />
        : <ForumScreen {...props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.interiorReducer.filter,
    reviews: state.downloadReducer.reviews,
    ready: state.downloadReducer.ready,
    profile: state.interiorReducer.profile,
    country: state.downloadReducer.country,
    brands: state.downloadReducer.brands
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch),
    downloadCountry: bindActionCreators(downloadCountry, dispatch),
    downloadReview: bindActionCreators(downloadReview, dispatch),
    downloadBrand: bindActionCreators(downloadBrand, dispatch),
    downloadComments: bindActionCreators(downloadComments, dispatch),
    changeSearchSwitch: bindActionCreators(changeSearchSwitch, dispatch),
    setMarker: bindActionCreators(setMarker, dispatch),
    deleteMarker: bindActionCreators(deleteMarker, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forum)