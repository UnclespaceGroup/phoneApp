import React from 'react'
import { View, Text } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

class CountryList extends React.Component {
  render () {
    const {
      props: {
        products
      },
      click
    } = this
    const allCountry = _.map(products, (item, key) => {
      return item.country
    })
    let country = _.uniq(allCountry)
    return (
      <View>
        <Card containerStyle={{padding: 0}}>
          {
            _.map(country, (u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u}
                  onPress={() => { click(u)}}
                />
              )
            })
          }
        </Card>
      </View>
    )
  }
  click = (country) => {
    const { setFilter } = this.props
    setFilter({
      country: country
    })
    Actions.forum()
  }
}

export default CountryList