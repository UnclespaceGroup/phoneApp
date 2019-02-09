import _ from 'lodash'

export const correctDate = (date) => {
  const array = date.split(' ')
  return {
    day: array[2] || 0,
    month: array[1] || 0,
    year: array[3] || 0,
    time: array[4] || 0
  }
}



export const GetById = (array, id) => {
  return _.find(array, item => item.Id === id) || {Name: 'Другой'}
}

// array = Массив индексов
export const filterReviews = (reviews, array, index) => {
  return _.filter(reviews, review =>
    _.find(array, a => review[index] === a)
  )
}

export const filterByName = (reviews, str) => {
  const s = str.toLowerCase()

  return _.filter(reviews, item =>
    item.Title.toLowerCase().indexOf(s) !== -1
  )
}
