import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { RkButton, RkCard, RkText } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'
import TabIcon from '../TabIcons/TabIcon'
import s from './style'
import { custom } from '../../global'
import Icon from 'react-native-vector-icons/Ionicons'
import { GetById } from '../../utils'
import _ from 'lodash'

class ForumCard extends React.PureComponent {
  state = {
    star: false
  }

  componentDidMount() {
    const { profile, Id } = this.props
    const active = profile.favorites.indexOf(Id.toString()) !== -1
    this.setState({star: active})
  }
  componentWillReceiveProps(props) {
    const { profile, Id } = props
    const active = profile.favorites.indexOf(Id.toString()) !== -1
    this.setState({star: active})
  }

  render () {
    const {
      props:{
        Id,
        Title,
        Text,
        CountryId,
        BrandId,
        country,
        brands,
        profile
      },
      state: {
        star
      },
      starClick
    } = this
    return (
      <RkCard rkType='rounded ' style={s.container}>
        <Image source={{uri: 'https://material.io/tools/icons/static/ic_icons_192px_light.svg'}}/>
          <RkText rkType='header' style={s.title}
                  >{Title}</RkText>
        <View rkCardContent>
          <RkText style={{ overflow: 'hidden', maxHeight: 93}}>
            {Text}
          </RkText>
          <RkText style={s.sub}>Страна: {GetById(country, CountryId).Name}</RkText>
          <RkText style={s.sub}>Бренд: {GetById(brands, BrandId).Name}</RkText>
        </View>
        <View rkCardFooter>
          <RkButton style={s.button}
                    onPress={() => {
                      Actions.push('post', {current: Id, title: Title})
                    }}>
            <RkText style={s.button_text}>Перейти</RkText>
            <Icon name={'ios-arrow-forward'} color={custom.white} size={20} />
          </RkButton>
          <TouchableOpacity onPress={starClick} >
            <TabIcon iconName={!star ? 'star-o' : 'star'}/>
          </TouchableOpacity>
        </View>
      </RkCard>
    )
  }
  starClick = async () => {
    const {
      state: {
        star
      },
      props: {
        profile,
        Id,
        deleteMarker,
        setMarker
      }
    } = this
    let favorites = profile.favorites
    if (!star) {
      favorites.push(Id.toString())
      const _profile = {
        ...profile,
        favorites: favorites
      }
      setMarker(profile.Id, _profile)
      this.setState({
        star: true
      })
    }
    else {
      const _fav = _.filter(favorites, item => item !== Id.toString())
      const _profile = {
        ...profile,
        favorites: _fav
      }
      deleteMarker(profile.Id, _profile)
      this.setState({
        star: false
      })
    }
  }
  static defaultProps = {
    title: 'Не пришло',
    description: 'пусто'
  }
}

export default ForumCard
