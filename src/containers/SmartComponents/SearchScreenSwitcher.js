import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { changeSearchSwitch } from '../../actions'
import { connect } from 'react-redux'
import { RkButton } from 'react-native-ui-kitten'
import { custom } from '../../global'
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
    borderBottomColor: custom.white,
    bottom: 0
  },
  text: {
    bottom: 0,
    color: custom.white,
    fontSize: 18
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
                onPress={() => {this.setState({open: !open})}}><Text style={s.text}>{(searchScreen === 'simple') ? 'Простой поиск' : 'По тегам'}</Text></TouchableOpacity>
            </View>
            :
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%'
            }}>
              <View style={searchScreen==='simple' ? s.item_active : s.item}><TouchableOpacity onPress={() => {click('simple')}}><Text style={s.text}>Простой поиск</Text></TouchableOpacity></View>
              <View style={searchScreen==='tag' ? s.item_active : s.item}><TouchableOpacity onPress={() => {click('tag')}}><Text style={s.text}>По тегам</Text></TouchableOpacity></View>
            </View>
        }
        <View style={s.icon} ><TouchableOpacity ><Icon name={open ? 'chevron-left' : 'chevron-right'} size={10} color={custom.white} /></TouchableOpacity></View>
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
