// import * as types from '../constants/index'
import * as addr from '../constants/addr'
import axios from 'axios'
import { Alert } from 'react-native'
import * as types from '../constants'
import _ from 'lodash'

export const addReview = (data, images) => {
  return dispatch => {
    dispatch({
      type: types.SHOW_PRELOADER,
      payload: true
    })
    axios.post(addr.API_REVIEW, data)
      .then(() => {
        Alert.alert('Успешно отправлено', 'Будет опубликовано после модерации')
        dispatch({
          type: types.SHOW_PRELOADER,
          payload: false
        })
      })
      .catch(e => {
        console.log(e)
        Alert.alert('Произошла ошибка', addr.API_REVIEW)
        dispatch({
          type: types.SHOW_PRELOADER,
          payload: false
        })
      })

    _.map(images, image => {
      if (image) {
        let formData = new FormData()
        formData.append('photo', {uri: image.uri, name: image.name, type: image.type})

        fetch(addr.API_IMAGES, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {console.log(res)})
          .catch(e => {console.log(e)})
      }
    })
  }
}
export const Register = (data) => {
  return dispatch => {
    axios.post(addr.API_USER, {
      ...data
    })
      .then(() => {
        dispatch({
          type: types.LOGIN,
          payload: data
        })
      })
      .catch((e) => {
        console.log(e)
        Alert.alert('Не удалось', 'Попробуйте позже')
      })
  }
}

export const addComment = (data) => {
  return dispatch => {
    dispatch({
      type: types.SHOW_PRELOADER,
      payload: true
    })
    axios.post(addr.API_COMMENT, {
      ...data
    })
      .then(() => {
        dispatch({
          type: types.SHOW_PRELOADER,
          payload: false
        })
        Alert.alert("Успешно отправлено", 'Будет доступно после модерации')
      })
      .catch(() => {
        dispatch({
          type: types.SHOW_PRELOADER,
          payload: false
        })
        Alert.alert('Не удолось', 'Попробуйте позже')
      })
  }
}

export const Log = (log) => {
  axios.post(addr.LOG, {log: log})
}

export const setMarker = (id, profile) => {
  const _addr = addr.API_USER + '/' + id
  return dispatch => {
    axios.put(_addr, {
      ...profile,
      favorites: profile.favorites.join('')
    })
    dispatch({
      type: types.SET_MARKER,
      payload: profile
    })
  }

}

export const deleteMarker = (id, profile) => {

  const _addr = addr.API_USER + '/' + id
  return dispatch => {
    axios.put(_addr, {
      ...profile,
      favorites: profile.favorites.join('')
    })
    dispatch({
      type: types.SET_MARKER,
      payload: profile
    })
  }
}
