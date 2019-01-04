import React from 'react'
import {View, Text} from 'react-native'
import styles from './scss/style.scss'
import {RkButton, RkTextInput} from 'react-native-ui-kitten'
import {SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import CommentAdd from "../../components/Comment/CommentAdd";

class SearchScreen extends React.Component {
    render() {
        const {
            product
        } = this.props
        return (
            <View>
                <Text>Поиск</Text>
            </View>
        )
    }
}

export default SearchScreen