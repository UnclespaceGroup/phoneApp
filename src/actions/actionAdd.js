// import * as types from '../constants/index'
import * as addr from '../constants/addr'
import axios from 'axios'
import { Alert } from 'react-native'

export const addReview = (data, image) => {
  let now_filename
  let localUri
  let filename
  let match
  let type
  if (image) {
    localUri = image.uri
    filename = localUri.split('/').pop()
    match = /\.(\w+)$/.exec(filename)
    type = match ? `image/${match[1]}` : `image`

    now_filename = Math.random().toString(36).substring(7) + '_' + filename
  }

  return () => {
    axios.post(addr.API_REVIEW, {
        ...data,
        Image: now_filename || 'default'
      }
    )
      .then(() => {
        Alert.alert('Успешно отправлено', 'Будет опубликовано после модерации')
      })
      .catch(e => {
        console.log(e)
        Alert.alert('Произошла ошибка', addr.API_REVIEW)
      })

    if (image) {
      let formData = new FormData()
      formData.append('photo', {uri: localUri, name: now_filename, type})

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
  }
}


