import * as types from '../constants'
import {AsyncStorage} from 'react-native'

const initialState = {
  country: [],
  profile: false,
  searchScreen: 'tag'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state
      }
    case types.SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload
        }
      }
    case types.CLEAR_FILTER:
      return {
        ...state,
        filter: true
      }
    case types.SHOW_PRELOADER:
      return {
        ...state,
        preloader: action.payload
      }
    case types.LOGIN:
      AsyncStorage.setItem(types.USER_STORAGE, action.payload.Token)
      return {
        ...state,
        profile: {
          ...action.payload
        }
      }
    case types.LOGOUT:
      AsyncStorage.setItem(types.USER_STORAGE, '')
      return {
        ...state,
        profile: false
      }
    case types.SEARCH_SWITCH:
      return {
        ...state,
        searchScreen: action.payload
      }
    case types.CLEAR_DISPATCH:
      return{
        ...state,
        ready: {
          brand: false,
          country: false,
          review: false
        }
      }
    default:
      return state
  }
}
