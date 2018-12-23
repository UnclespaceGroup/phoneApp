import React from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Image} from 'react-native'
import CommentAdd from "../../components/Comment/CommentAdd";
import styles from './scss/style.scss'

class PostScreen extends React.Component {
    render() {
        const {
            props: {
                id,
                title,
                description,
                image,
                country
            }
        } = this
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={image}/>
                    <Text>id = {id}</Text>
                    <Text>{title}</Text>
                    <Text>Страна: {country}</Text>
                    <Text>{description}</Text>
                </View>
                <CommentAdd/>

            </ScrollView>
        )
    }
}

export default PostScreen
