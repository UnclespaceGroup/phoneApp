import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { changeSearchSwitch } from '../../actions'
import { connect } from 'react-redux'
import { RkButton } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/FontAwesome'

const s = StyleSheet.create({
  container: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    bottom: 0
  },
  icon: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    color: 'red',
    bottom: 0
  },
  item_active: {
    padding: 10,
    color: 'red',
    height: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    bottom: 0
  }
})

class SearchScreenSwitcher extends Component {
  state = {
    open: false
  }

  render () {
    const {
      props: {
        searchScreen
      },
      state: {
        open
      },
      click
    } = this
    return (
      <View style={s.container}>
        {
          !open ?
            <View>
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}
                onPress={() => {this.setState({open: !open})}}><Text>{(searchScreen === 'simple') ? 'Обычный поиск' : 'Поиск по тегам'}</Text></TouchableOpacity>
            </View>
            :
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%'
            }}>
              <View style={searchScreen==='simple' ? s.item_active : s.item}><TouchableOpacity onPress={() => {click('simple')}}><Text>Обычный поиск</Text></TouchableOpacity></View>
              <View style={searchScreen==='tag' ? s.item_active : s.item}><TouchableOpacity onPress={() => {click('tag')}}><Text>Поиск по тегам</Text></TouchableOpacity></View>
            </View>
        }
        <View style={s.icon} ><Icon name={open ? 'chevron-left' : 'chevron-right'} size={10} /></View>
      </View>
    )
  }

  click = (name) => {
    const {
      props: {
        changeSearchSwitch
      },
      state: {
        open
      }
    } = this
    changeSearchSwitch(name)
    this.setState({open: !open})
  }
}

const mapStateToProps = (state) => {
  return {
    searchScreen: state.interiorReducer.searchScreen
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchSwitch: bindActionCreators(changeSearchSwitch, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreenSwitcher)
