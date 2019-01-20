import { createStore, applyMiddleware, combineReducers } from 'redux'
import { downloadReducer, interiorReducer } from '../reducers/index'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({interiorReducer, downloadReducer}),
  applyMiddleware(thunk)
)
export default store
