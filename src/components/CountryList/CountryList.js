import React from 'react'
import { View } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

class CountryList extends React.Component {
  render () {
    const {
      props: {
        //products,
        country
      },
      click
    } = this
    console.log(country)
    // const allCountry = _.map(products, (item, key) => {
    //   return item.country
    // })
    // let country = _.uniq(allCountry)
    return (
      <View>
        <Card containerStyle={{padding: 0}}>
          {
            _.map(country, ({Name, Id}, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={Name}
                  onPress={() => { click(Id)}}
                />
              )
            })
          }
        </Card>
      </View>
    )
  }
  click = (country) => {
    // const { setFilter } = this.props
    // setFilter({
    //   country: country
    // })
    Actions.push('catalog', {currentCountry: country})
  }
}

export default CountryList