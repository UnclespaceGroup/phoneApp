import React, { Component } from 'react'
import CountryScreen from '../../screens/CountryScreen/CountryScreen'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'

class Country extends Component{
  render(){
    const {
      ...props
    } = this.props
    return(
      <CountryScreen {...props}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    filter: state.filter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Country)