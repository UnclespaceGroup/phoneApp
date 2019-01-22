import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import SearchScreen from '../../screens/SearchScreen/SearchScreen'
import _ from 'lodash'

class Search extends Component {
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
    profile: state.interiorReducer.profile,
    brands: state.downloadReducer.brands,
    country: state.downloadReducer.country
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
