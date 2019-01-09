import React from 'react'
import {View, Text} from 'react-native'
import Authorization from '../../containers/Authorization'

class SearchScreen extends React.Component {
    render() {
        const {
          profile
        } = this.props
        return (
          <View>
            <Text>Поиск</Text>
          </View>
        )
    }
}

export default SearchScreen