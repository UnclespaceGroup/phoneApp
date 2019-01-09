import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Authorization from '../../containers/Authorization'
import background from '../../static/backgroundAuto.jpg'
import MyProfile from './MyProfile'

class ProfileScreen extends React.Component {
  render () {
    const {
      profile
    } = this.props
    return (
      <ImageBackground
        source={background}
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {
          profile ?
            <MyProfile {...{profile}} />
            : <Authorization />
        }
      </ImageBackground>
    )
  }
}

export default ProfileScreen