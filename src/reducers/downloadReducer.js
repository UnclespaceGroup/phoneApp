import * as types from '../constants/index'
import _ from 'lodash'

const initialState = {
  ready: {
    brand: false,
    country: false,
    review: false,
    users: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DOWNLOAD_COMMENT:
      return {
        ...state,
        comments: action.payload
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
    case types.DOWNLOAD_REVIEW:
      const _reviews = _.filter(action.payload, item => item.Active)
      return {
        ...state,
        reviews: _reviews,
        ready: {
          ...state.ready,
          review: true
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
    case types.DOWNLOAD_USER:
      return {
        ...state,
        users: action.payload,
        ready: {
          ...state.ready,
          users: true
        }
      }
    default:
      return state
  }
}