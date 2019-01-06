import * as types from '../constants/index'
// import dog from '../static/dog_test.jpg'
// import cat from '../static/cat.jpg'
// import horek from '../static/horek.jpg'

export const initialState = {
  country: [],
  filter: {
    country: true
  },
  ready: {
    brand: false,
    country: false,
    review: false
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
    case types.DOWNLOAD_COUNTRY:
      return {
        ...state,
        country: action.payload,
        ready: {
          ...state.ready,
          country: true
        }
      }
    case types.DOWNLOAD_REVIEW:
      return {
        ...state,
        reviews: action.payload,
        ready: {
          ...state.ready,
          review: true
        }
      }
    case types.DOWNLOAD_BRAND:
      return {
        ...state,
        brands: action.payload,
        ready: {
          ...state.ready,
          brand: true
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