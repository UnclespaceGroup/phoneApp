import React from 'react'
import { View, Image } from 'react-native'
import { RkButton, RkCard, RkText, } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'

class ForumCard extends React.Component {
  state = {
    star: false
  }
  render () {
    const {
      props:{
        id,
        title,
        description
      },
      state: {
        star
      },
      starClick
    } = this
    return (
      <RkCard rkType='rounded '>
        <Image source={{uri: 'https://material.io/tools/icons/static/ic_icons_192px_light.svg'}} />
        <View rkCardHeader>
          <RkText rkType='header'>{title}</RkText>
        </View>
        <View rkCardContent>
          <RkText style={{textAlign: 'center'}}>
            {description}
          </RkText>
        </View>
        <View rkCardFooter>
          <RkButton rkType='small outline'
                    onPress={() => {
                      Actions.push('post', {current: id})
                    }}
          >
            Подробнее
          </RkButton>
          <RkButton onPress={starClick} rkType={!star ? 'small' : 'small outline'}>{!star ? 'Добавить': 'Убрать'}</RkButton>
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