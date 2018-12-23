import React from 'react'
import { View, Text } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import _ from 'lodash'

class CountryList extends React.Component {
  render () {
    const {
      products
    } = this.props
    const allCountry = _.map(products, (item, key) => {
      return item.country
    })
    let country = _.uniq(allCountry)
    console.log(country)
    return (
      <View>
        <Card containerStyle={{padding: 0}}>
          {
            _.map(country, (u, i) => {
              console.log(u)
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u}
                  leftAvatar={products[0].image}
                  subtitle={'ПОАВА'}
                />
              )
            })
          }
        </Card>
      </View>
    )
  }
}

export default CountryList