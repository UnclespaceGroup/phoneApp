import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { RkButton, RkCard, RkText, } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'
import TabIcon from '../TabIcons/TabIcon'

class ForumCard extends React.Component {
  state = {
    star: false
  }
  render () {
    const {
      props:{
        Id,
        Title,
        Text
      },
      state: {
        star
      },
      starClick
    } = this
    return (
      <RkCard rkType='rounded ' style={{backgroundColor: '#F0F2EB', marginBottom: -1}}>
        <Image source={{uri: 'https://material.io/tools/icons/static/ic_icons_192px_light.svg'}}/>
          <RkText rkType='header' style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 12}}
                  >{Title}</RkText>
        <View rkCardContent>
          <RkText style={{ overflow: 'hidden', maxHeight: 93}}>
            {Text}
          </RkText>
        </View>
        <View rkCardFooter>
          <RkButton rkType='small outline'
                    contentStyle={{color: 'red'}}
                    style={{borderColor: 'red'}}
                    onPress={() => {
                      Actions.push('post', {current: Id})
                    }}
          >
            Подробнее
          </RkButton>
          <TouchableOpacity onPress={starClick} >
            <TabIcon iconName={!star ? 'star-o' : 'star'}/>
          </TouchableOpacity>
        </View>
      </RkCard>
    )
  }
  starClick = () => {
    const { star } = this.state
    this.setState({star: !star})
  }
  static defaultProps = {
    title: 'Не пришло',
    description: 'пусто'
  }
}

export default ForumCard
