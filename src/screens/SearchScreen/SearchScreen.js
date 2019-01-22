import React from 'react'
import {View, Text} from 'react-native'
import CheckBoxBlock from '../../components/CheckBoxBlock/CheckBoxBlock'
import _ from 'lodash'

class SearchScreen extends React.Component {
    render() {
        const {
          profile,
          brands
        } = this.props
      const brandsFilter = _.map(brands, brand => { return {...brand, active: false}} )
      return (
          <View>
            <Text>Поиск</Text>
            <CheckBoxBlock
              items={brandsFilter}
            />
          </View>
        )
    }
}

export default SearchScreen