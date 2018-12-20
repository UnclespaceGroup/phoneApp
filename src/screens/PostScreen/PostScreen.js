import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

class PostScreen extends React.Component {
  render () {
    const {
      products
    } = this.props
    console.log(this.props.products)
    return (
      <ScrollView>
        <Text>{products.title}</Text>
        <Text>{products.description}</Text>
        <Text>{products.date}</Text>
        <Text>{products.likes}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: dispatch.getData
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)