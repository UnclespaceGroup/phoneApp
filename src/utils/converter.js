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
