import React from 'react'
import { View } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

class BrandList extends React.Component {
  render () {
    const {
      props: {
        brands
      },
      click
    } = this
    return (
      <View>
        <Card containerStyle={{padding: 0}}>
          {
            _.map(brands, ({Name, Id}, i) => {
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
            title={'Другие бренды'}
            onPress={() => { click(0)}}
          />
        </Card>
      </View>
    )
  }
  click = (Id) => {
    Actions.push('catalog', {currentBrand: Id})
  }
}

export default BrandList