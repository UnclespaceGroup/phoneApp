import * as types from '../constants/index'
export const initialState = {
  products: {
    title: 'Что-то крутое',
    description: 'Из казахстана',
    date: 'Сегодня',
    likes: '5 Лукасов'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return{
        ...state
      }
    default:
      return state
  }
}