import { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from 'react-native-elements'
import React from 'react'
import { colors as c } from '../../global'

class TabIcon extends Component{
  render(){
    const color = this.props.selected ? '#00f240' : '#301c2a'
    const {
      rightMargin
    } = this.props
    return(
      <View style={{marginRight: rightMargin ? 10 : 0,flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: c.red}} name={this.props.iconName || "circle"} size={25}/>
      </View>
    )
  }
}
export default TabIcon
