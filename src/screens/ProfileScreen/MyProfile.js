import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { RkButton } from 'react-native-ui-kitten'

class MyProfile extends React.Component {
  render () {
    const {
      profile,
      logOut
    } = this.props
    return (
      <View
        style={s.container}
      >
        <View
          style={s.block}
        >
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 100
            }}
            source={{uri: profile.Avatar}}
          />
          <Text style={s.name}>{profile.Name}</Text>
          <Text style={s.email}>{profile.Email}</Text>

        </View>
          <RkButton onPress={() => {logOut()}}>Выйти</RkButton>
      </View>
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
    width: '100%'
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