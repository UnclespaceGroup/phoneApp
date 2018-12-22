import * as types from '../constants/index'

export const initialState = {
  products: [
    {
      title: 'Что-то крутое',
      description: 'Из казахстана',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Россия'
    },
    {
      title: 'Макарошки',
      description: 'С пьюрешкой, ароматно пиздец',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Китай'
    },
    {
      title: 'Гречка',
      description: 'Без ничего, ещё и соленая капец',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Япония'
    },
    {
      title: 'Что-то крутое',
      description: 'Из казахстана',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Сша'
    },
    {
      title: 'Макарошки',
      description: 'С пьюрешкой, ароматно пиздец',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Англия'
    },
    {
      title: 'Гречка',
      description: 'Без ничего, ещё и соленая капец',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Россия'
    }
  ],
  filter: {
    country: true
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state
      }
    case types.SET_FILTER:
      return {
        ...state,
        filter: action.data
      }
    case types.CLEAR_FILTER:
      return {
        ...state,
        filter: {
          country: true
        }
      }
    default:
      return state
  }
}