import React from 'react';
import {ScrollView} from 'react-native';
import {store} from '../../store/store'
import ForumCard from '../../components/ForumCard/ForumCard'
export default class ForumScreen extends React.Component {

    render() {
        const {
            forum
        } = store
        return (
            <ScrollView>
                {
                    forum.map((item, key) =>
                        <ForumCard key={key} {...item} />
                    )
                }
            </ScrollView>
        );
    }
}
