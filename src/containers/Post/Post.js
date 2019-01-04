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
      reviews,
      country
    } = this.props
    const item = ( current != null && _.find(reviews, (item) => item.Id === current)) || { title: 'Не найдено'}
    return(
      <View>
        <Text>Пост</Text>
        <PostScreen {...{ item, country}} />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
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
export default connect(mapStateToProps, mapDispatchToProps)(Post)
