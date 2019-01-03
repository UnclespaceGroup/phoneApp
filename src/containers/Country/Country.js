import React, { Component } from 'react'
import CountryScreen from '../../screens/CountryScreen/CountryScreen'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'

class Country extends Component{
  render(){
    const {
      setFilter,
      country
    } = this.props
    return(
      <CountryScreen {...{country,setFilter}}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    country: state.country
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Country)
