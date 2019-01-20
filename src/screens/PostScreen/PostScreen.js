import React from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Image} from 'react-native'
import CommentAdd from '../../components/Comment/CommentAdd'
import styles from './scss/style.scss'
import _ from 'lodash'
import * as arrd from '../../constants/addr'

// TODO Сделать сжатие отправляемых фото
class PostScreen extends React.Component {
    render() {
        const {
            props: {
                item,
                country
            }
        } = this
        let curCountry = _.find(country, x => x.Id === item.CountryId)
        curCountry = curCountry ? curCountry.Name : 'Другая'

        const imageAddr = arrd.IMAGES_SERVER + item.Image
        console.log(imageAddr)
        return (
            <ScrollView>
                <View style={{alignItems: 'center'}}>

                    <Text style={styles.title}>{item.Title}</Text>
                    <Image
                        style={styles.img}
                        source={{uri: imageAddr}}
                    />
                </View>
                <View style={styles.text}>
                    <Text>Cтрана: {curCountry}</Text>
                    <Text style={styles.comment}>{item.Text}</Text>

                </View>
                {/*<CommentAdd />*/}

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
