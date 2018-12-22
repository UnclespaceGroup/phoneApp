import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import PostScreen from '../../screens/PostScreen/PostScreen'

class Post extends Component{
  render(){
    const {
      ...props
    } = this.props
    return(
      <View>

      </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Post)
