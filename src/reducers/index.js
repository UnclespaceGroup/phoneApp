import * as types from '../constants/index'
import dog from '../static/dog_test.jpg'
import cat from '../static/cat.jpg'
import horek from '../static/horek.jpg'

export const initialState = {
  products: [
    {
      id: '0',
      title: 'Милая Собачка',
      category: 'Собака',
      description: 'Пока тут собачка, но потом будут соответственные данные',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Россия',
      image: dog
    },
    {
      id: '1',
      title: 'Маленькая Кошечка',
      category: 'Кошка',
      description: 'Маленькая кошечка в качестве демки',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Китай',
      image: cat
    },
    {
      id: '2',
      title: 'Хорек',
      category: 'Хорек',
      description: 'Просто хорек',
      date: 'Сегодня',
      likes: '5 Лукасов',
      country: 'Россия',
      image: horek
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