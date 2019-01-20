import * as types from '../constants'

export const getData = () => {
  return dispatch => {
    dispatch({
      type: types.GET_DATA
    })
  }
}
export const setFilter = (data) => {
  return dispatch => {
    dispatch({
      type: types.SET_FILTER,
      data
    })
  }
}
export const clearFilter = () => {
  return dispatch => {
    dispatch({
      type: types.CLEAR_FILTER
    })
  }
}
export const logIn = (data) => {
  return dispatch => {
    dispatch({
      type: types.LOGIN,
      payload: data
    })
  }
}
export const logOut = () => {
  return dispatch => {
    dispatch({
      type: types.LOGOUT
    })
  }
}