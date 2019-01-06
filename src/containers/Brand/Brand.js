import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import BrandScreen from '../../screens/BrandScreen/BrandScreen'

class Brand extends Component{
  render(){
    const {
      setFilter,
      brands
    } = this.props
    return(
      <BrandScreen {...{brands,setFilter}}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    brands: state.brands,
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Brand)
