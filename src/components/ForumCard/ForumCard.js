import React from 'react';
import {View, Image} from 'react-native';
import {RkButton, RkCard, RkText,} from 'react-native-ui-kitten';
import {Actions} from "react-native-router-flux";

class ForumCard extends React.Component {
    render() {
        const {
            title,
            description
        } = this.props
        return (
            <RkCard rkType='rounded '>
                <Image source={{uri: 'https://material.io/tools/icons/static/ic_icons_192px_light.svg'}}/>
                <View rkCardHeader>
                    <RkText rkType='header'>{title}</RkText>
                </View>
                <View rkCardContent>
                    <RkText style={{textAlign: 'center'}}>
                        {description}
                    </RkText>
                </View>
                <View rkCardFooter>
                    <RkButton
                        rkType='small outline'
                        >
                        Подробнее
                    </RkButton>
                    <RkButton rkType='small'>Button</RkButton>
                </View>
            </RkCard>
        )
    }
}

export default ForumCard