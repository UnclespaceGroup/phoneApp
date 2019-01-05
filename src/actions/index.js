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
    axios.post(addr.API_REVIEW, data.data)
      .then(() => {
        Alert.alert('Успешно отправлено', 'Будет опубликовано после модерации')
      })
      .catch(e => {
        console.log(e)
        Alert.alert('Произошла ошибка', addr.API_REVIEW)
      })
    // let localUri = data.image.uri

    // let filename = localUri.split('/').pop()

    // let match = /\.(\w+)$/.exec(filename)
    // let type = match ? `image/${match[1]}` : `image`

    let formData = new FormData()
    // formData.append('photo', {uri: localUri, name: filename, type})
    formData.append('file0', data.image)

    fetch(addr.API_IMAGES, {
      method: 'POST',
      header: {
        'content-type': false,
        'process-data': false
      },
      body: formData
    })
      .then(res => { console.log(res)})
      .catch(e => {console.log(e)})
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
