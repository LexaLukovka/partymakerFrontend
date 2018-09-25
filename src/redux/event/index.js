import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import listReducer from './list/reducer'
import singleReducer from './single/reducer'
import buttonReducer from './buttonCreate/reducer'

export default combineReducers({
  listReducer: persistReducer({ key: 'events', storage }, listReducer),
  singleReducer: persistReducer({ key: 'event', storage }, singleReducer),
  buttonReducer,
})
