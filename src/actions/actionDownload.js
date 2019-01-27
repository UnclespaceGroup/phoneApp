import axios from 'axios'
import * as addr from '../constants/addr'
import * as types from '../constants'
import { Alert } from 'react-native'

export const downloadCountry = () => {
  return dispatch => {
    axios.get(addr.API_COUNTRY)
      .then(res => {
        dispatch({
          type: types.DOWNLOAD_COUNTRY,
          payload: res.data
        })
      })
      .catch(e => {
        console.log(e)
        Alert.alert('Произошла ошибка', addr.API_COUNTRY)
      })
  }
}
export const downloadReview = () => {
  return dispatch => {
    axios.get(addr.API_REVIEW)
      .then(res => {
        dispatch({
          type: types.DOWNLOAD_REVIEW,
          payload: res.data
        })
      })
      .catch(e => {
        console.log(e)
        Alert.alert('Произошла ошибка', addr.API_COUNTRY)
      })
  }
}
export const downloadBrand = () => {
  return dispatch => {
    axios.get(addr.API_BRAND)
      .then(res => {
        dispatch({
          type: types.DOWNLOAD_BRAND,
          payload: res.data
        })
      })
      .catch(e => {
        console.log(e)
        Alert.alert('Произошла ошибка', addr.API_BRAND)
      })
  }
}
export const downloadComments = () => {
  return dispatch => {
    axios.get(addr.API_COMMENT)
      .then(res =>{
        dispatch({
          type: types.DOWNLOAD_COMMENT,
          payload: res.data
        })
      })
  }
}
export const downloadUsers = () => {
  return dispatch => {
    axios.get(addr.API_USER)
      .then(res => {
        dispatch({
          type: types.DOWNLOAD_USER,
          payload: res.data
        })
      })
  }
}
