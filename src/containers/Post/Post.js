import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import PostScreen from '../../screens/PostScreen/PostScreen'
import _ from 'lodash'

class Post extends Component{
  render(){
    const {
      current,
      products
    } = this.props
    const item = _.find(products, (item) => item.id === current) || { title: 'Не найдено'}
    return(
      <View>
        <PostScreen {...item} />
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
