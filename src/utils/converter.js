export const correctDate = (date) => {
  const array = date.split(' ')
  return {
    day: array[2] || 0,
    month: array[1] || 0,
    year: array[3] || 0,
    time: array[4] || 0
  }
}

