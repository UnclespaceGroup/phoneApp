import React from 'react'
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { RkButton } from 'react-native-ui-kitten'
import SimpleForumScreen from '../ForumScreen/SimpleForumScreen'
import _ from 'lodash'

class MyProfile extends React.Component {
  state = {
    current: []
  }

  componentDidMount () {
    const {profile, reviews} = this.props
    const current = _.filter(reviews, item => {
        return profile.favorites.indexOf(item.Id.toString()) !== -1
      }
    )
    this.setState({
      current: current
    })
  }

  render () {
    const {
      props: {
        profile,
        logOut,
        reviews,
        ...props
      },
      state: {
        current
      }
    } = this
    return (
      <ScrollView>
        <View
          style={s.container}
        >
          <View
            style={s.block}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 40
              }}
              source={{uri: profile.Avatar}}
            />
          </View>
          <View>
            <Text style={s.name}>{profile.Name}</Text>
            <Text style={s.email}>{profile.Email}</Text>
          </View>
          <View>
            <RkButton onPress={() => {logOut()}}>Выйти</RkButton>
          </View>
        </View>
        <SimpleForumScreen {...{reviews: current, profile, ...props}} />
      </ScrollView>
    )
  }

  static propTypes = {
    profile: PropTypes.shape({
      Avatar: PropTypes.string,
      Email: PropTypes.node,
      FullName: PropTypes.node,
      Id: PropTypes.node,
      Name: PropTypes.string,
      SurName: PropTypes.string,
      Token: PropTypes.node
    })
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 400
  },
  name: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  email: {
    color: 'white',
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center'
  }
})

export default MyProfile