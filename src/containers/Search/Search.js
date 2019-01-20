import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData } from '../../actions'
import { connect } from 'react-redux'
import SearchScreen from '../../screens/SearchScreen/SearchScreen'

class Search extends Component {
  render () {
    const {
      props: {
        ...props
      }
    } = this
    return (
      <SearchScreen {...props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.interiorReducer.filter,
    profile: state.interiorReducer.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
