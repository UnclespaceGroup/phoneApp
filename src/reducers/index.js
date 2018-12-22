import * as types from '../constants/index'

export const initialState = {
  products: [
    {
      id: 0,
      title: 'Что-то крутое',
      description: 'Из казахстана',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Россия'
    },
    {
      id: 1,
      title: 'Макарошки',
      description: 'С пьюрешкой, ароматно пиздец',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Китай'
    },
    {
      id: 2,
      title: 'Гречка',
      description: 'Без ничего, ещё и соленая капец',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Япония'
    },
    {
      id: 3,
      title: 'Что-то крутое',
      description: 'Из казахстана',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Сша'
    },
    {
      id: 4,
      title: 'Макарошки',
      description: 'С пьюрешкой, ароматно пиздец',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Англия'
    },
    {
      id: 5,
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