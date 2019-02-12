import React, { Component } from 'react'
import AuthorizationScreen from '../../screens/AuthorizationScreen/AuthorizationScreen'
import { bindActionCreators } from 'redux'
import { logIn, logOut, Register } from '../../actions'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
import { USER_STORAGE } from '../../constants/index'
import _ from 'lodash'
import { downloadUsers } from '../../actions/actionDownload'

class Authorization extends Component {
  componentWillReceiveProps (props) {
    if (props.profile) {
      console.log('gg')
      Actions.jump('tabs')
    }
  }

  componentWillMount () {
    const {
      logIn,
      users
    } = this.props
    AsyncStorage.getItem(USER_STORAGE)
      .then(val => {
        if (val && val.length) {
          const current = _.find(users, ({Token}) => Token === val)
          if (current) {
            logIn(current)
          }
        }
      })
  }

  render () {
    const {
      ...props
    } = this.props
    return (
      <AuthorizationScreen {...props} />
    )
  }

  static defaultProps = {
    logIn: () => { console.log('Функция logIn не передана')}
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.interiorReducer.profile,
    users: state.downloadReducer.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: bindActionCreators(logIn, dispatch),
    logOut: bindActionCreators(logOut, dispatch),
    Register: bindActionCreators(Register, dispatch),
    downloadUsers: bindActionCreators(downloadUsers, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
