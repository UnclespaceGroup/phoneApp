import * as types from '../constants'

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
      return {
        ...state,
        profile: {
          name: action.payload.name,
          photoUrl: action.payload.photoUrl,
          email: action.payload.email
        }
      }
    case types.LOGOUT:
      return {
        ...state,
        profile: false
      }
    case types.SEARCH_SWITCH:
      return {
        ...state,
        searchScreen: action.payload
      }
    default:
      return state
  }
}