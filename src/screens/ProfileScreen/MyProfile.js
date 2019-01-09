import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { StyleSheet } from 'react-native'

class MyProfile extends React.Component {
  render () {
    const {
      profile
    } = this.props
    return (
      <View
        style={{
          width: '100%',
          flex: 1, justifyContent: 'center', justifyItems: 'center'
        }}
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
            source={{uri: profile.photoUrl}}
          />
        </View>
        <View>
          <Text >{profile.name}</Text>
          <Text >{profile.email}</Text>
        </View>
      </View>
    )
  }
}
const s = StyleSheet.create({
  block: {
    flex: 1, flexDirection: 'row', justifyContent: 'center',marginBottom: 10
  }
})

export default MyProfile