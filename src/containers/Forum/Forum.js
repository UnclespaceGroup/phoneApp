import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import ForumScreen from '../../screens/ForumScreen/ForumScreen'
import FilteredForumScreen from '../../screens/ForumScreen/FilteredForumScreen'
import FilteredByTagsForumScreen from '../../screens/ForumScreen/FilteredByTagsForumScreen'

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
    profile: state.interiorReducer.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forum)