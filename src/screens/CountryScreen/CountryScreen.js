import React from 'react'
import {RkButton} from 'react-native-ui-kitten'
import {View} from 'react-native'
import styles from './scss/style.scss'

class CountryScreen extends React.Component {
    render() {
        return (
            <View style={styles.wrap}>
                <RkButton>Japan</RkButton>
                <RkButton> Tai </RkButton>
                <RkButton>Koreja</RkButton>
                <RkButton> other </RkButton>
            </View>

        )
    }
}

export default CountryScreen