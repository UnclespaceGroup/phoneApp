import React from 'react'
import { ScrollView } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

class CountryList extends React.Component {
  render () {
    const {
      props: {
        country
      },
      click
    } = this
    return (
      <ScrollView>
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
          <ListItem
            roundAvatar
            title={'Другие страны'}
            onPress={() => { click(0)}}
          />
        </Card>
      </ScrollView>
    )
  }
  click = (Id) => {
    Actions.push('catalog', {currentCountry: Id})
  }
}

export default CountryList