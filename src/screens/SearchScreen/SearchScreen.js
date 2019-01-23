import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SimpleSearchScreen from './SimpleSearchScreen'
import TagSearchScreen from './TagSearchScreen'

const s = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%'
  },
  input: {
    paddingLeft: 5,
    margin: 10
  },
  block: {
    marginBottom: 30,
  },
  button: {
    bottom: 10,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
  }
})

class SearchScreen extends React.PureComponent {
  state = {
    brands: [],
    country: [],
    search: ''
  }

  componentWillReceiveProps (props) {
    const {
      filter
    } = props
    this.setState({
      brands: filter.brands,
      country: filter.country
    })
  }

  render () {
    const {
      props: {
        props,
        searchScreen
      }
    } = this
    return (
      <View>
      searchScreen === 'simple'
        ? <SimpleSearchScreen {...props} />
        : <TagSearchScreen {...props} />

      </View>
    )
  }

  static defaultProps = {
    filter: {
      brands: {},
      country: {}
    }
  }
}

export default SearchScreen