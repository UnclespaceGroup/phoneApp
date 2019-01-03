import * as types from '../constants/index'
// import dog from '../static/dog_test.jpg'
// import cat from '../static/cat.jpg'
// import horek from '../static/horek.jpg'

export const initialState = {
  country: [],
  filter: {
    country: true
  }
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
        country: action.payload
      }
    case types.DOWNLOAD_REVIEW:
      return {
        ...state,
        reviews: action.payload
      }
    default:
      return state
  }
}