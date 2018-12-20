import React from 'react'
import {ScrollView, Text} from 'react-native'
import {store} from "../../store/store";

class PostScreen extends React.Component{
    render(){
        const {
            title,
            description,
            date,
            likes
        } = this.props
        return(
            <ScrollView>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{date}</Text>
                <Text>{likes}</Text>
            </ScrollView>
        )
    }
}
export default PostScreen