import React from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Image} from 'react-native'
import CommentAdd from "../../components/Comment/CommentAdd";
import styles from './scss/style.scss'
import _ from 'lodash'

class PostScreen extends React.Component {
    render() {
        const {
            props: {
                item,
                country
            }
        } = this
      const curCountry = _.find(country, x => x.Id === item.Id).Name || 'Другая'
        return (
            <ScrollView>
                <View style={styles.container}>
                  <Image source={item.Image} />
                  <Text>id = {item.Id}</Text>
                  <Text>{item.Title}</Text>
                  <Text>{item.Text}</Text>
                  <Text>страна: {curCountry}</Text>
                </View>
                <CommentAdd/>

            </ScrollView>
        )
    }
    static defaultProps = {
      Id: 'Пусто',
      Title: 'Пусто',
      curCountry: 'Другая',
      Text: 'Пусто'
    }
}

export default PostScreen
