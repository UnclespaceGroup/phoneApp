import * as types from '../constants'

const initialState = {
  country: [],
  filter: {
    country: true
  },
  profile: false
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
        filter: action.data
      }
    case types.CLEAR_FILTER:
      return {
        ...state,
        filter: {
          country: true
        }
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
    default:
      return state
  }
}