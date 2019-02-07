import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { getData, setFilter } from '../../actions'
import { connect } from 'react-redux'
import PostScreen from '../../screens/PostScreen/PostScreen'
import _ from 'lodash'
import { addComment } from '../../actions/actionAdd'

class Post extends Component{
  render(){
    const {
      current,
      reviews,
      country,
      allComments,
      ...props
    } = this.props
    const item = ( current != null && _.find(reviews, (item) => item.Id === current)) || { title: 'Не найдено'}
    const _comments = allComments.filter(item => item.ReviewId === current)

    

    return(
      <View>
        <PostScreen {...{ item, country, comments: _comments, ...props}} />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    reviews: state.downloadReducer.reviews,
    filter: state.interiorReducer.filter,
    users: state.downloadReducer.users,
    country: state.downloadReducer.country,
    profile: state.interiorReducer.profile,
    allComments: state.downloadReducer.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch),
    addComment: bindActionCreators(addComment, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
