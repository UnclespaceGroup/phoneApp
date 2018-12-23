import React from 'react'
import {View, TextInput} from "react-native";
import styles from './scss/style.scss'
import {RkButton} from "react-native-ui-kitten";

class CommentAdd extends React.Component {
    render() {
        // TODO Разобрать работу placeholder
        return (
            <View style={styles.container}>
                <TextInput
                    multiline={true}
                    style={styles.container__text}
                    placeholder={'Оставьте свой комментарий'}
                />
                <RkButton
                    rkType={'outline'}
                    onPress={() => alert('Ваш комментарий добавлен')}
                    style={styles.container__button}
                >Отправить</RkButton>
            </View>
        )
    }
}

export default CommentAdd