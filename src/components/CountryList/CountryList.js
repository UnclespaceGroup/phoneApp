import React from 'react'
import { View } from "react-native";
import { Card, ListItem } from "react-native-elements";
import _ from 'lodash'

class CountryList extends React.Component {
    render() {
        const {
            products
        } = this.props
        const country = _.map(products, (item, key) =>{
            return item.country
        })
        _.uniqWith(country, _.isEqual)
        return(
            <View>
                <Card containerStyle={{padding: 0}} >
                    {
                        _.map(country, (u, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    roundAvatar
                                    title={u}
                                />
                            );
                        })
                    }
                </Card>
            </View>
        )
    }
}

export default CountryList