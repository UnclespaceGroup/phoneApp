import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import TagSearchScreen from '../../screens/SearchScreen/TagSearchScreen'
import SimpleSearchScreen from '../../screens/SearchScreen/SimpleSearchScreen'

class Search extends Component {
  render () {
    const {
      props: {
        searchScreen,
        filter,
        ...props
      }
    } = this
    return (
      searchScreen !== 'tag'
      ? <SimpleSearchScreen {...{...props, filter }} />
      : <TagSearchScreen {...{...props }} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.interiorReducer.filter,
    profile: state.interiorReducer.profile,
    brands: state.downloadReducer.brands,
    country: state.downloadReducer.country,
    searchScreen: state.interiorReducer.searchScreen
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
