import * as types from '../constants/index'
import * as addr from '../constants/addr'
import axios from 'axios'
import { Alert } from 'react-native'

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
export const addReview = (data) => {
  return () => {
    axios.post(addr.API_REVIEW, data)
      .then(() => {
        Alert.alert('Успешно отправлено', 'Будет опубликовано после модерации')
      })
      .catch(e => {
        console.log(e)
        Alert.alert('Произошла ошибка', addr.API_REVIEW)
      })
  }
}
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
