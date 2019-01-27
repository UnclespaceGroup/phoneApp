import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import TagSearchScreen from '../../screens/SearchScreen/TagSearchScreen'
import SimpleSearchScreen from '../../screens/SearchScreen/SimpleSearchScreen'

class Search extends Component {
  state = {

  }
  componentDidMount() {
    const {
      setFilter,
      brands,
      country
    } = this.props
    const brandsFilter = _.map(brands, brand => { return {...brand, active: false}})
    const countryFilter = _.map(country, c => { return {...c, active: false}})
    setFilter({brands: brandsFilter})
    setFilter({country: countryFilter})
  }
  render () {
    const {
      props: {
        searchScreen,
        filter
      }
    } = this
    return (
      searchScreen === 'tag'
      ? <TagSearchScreen {...{setFilter}} />
      : <SimpleSearchScreen {...{filter, setFilter }} />
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
