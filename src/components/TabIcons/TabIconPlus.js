import { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'
import { colors as c, custom as a } from '../../global'

class TabIconPlus extends Component{
  render(){
    const color = !this.props.focused ? c.reda : c.red
    const {
      rightMargin
    } = this.props
    return(
      <View style={{
        marginRight: rightMargin ? 10 : 0,
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'center',
        justifyContent: 'center'
      }}>
        <Icon style={{color, marginBottom: 7}} name={this.props.iconName || "pluscircle"} size={55}/>
      </View>
    )
  }
}
export default TabIconPlus
