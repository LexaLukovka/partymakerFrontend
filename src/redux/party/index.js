import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import createReducer from './create/reducer'
import listReducer from './list/reducer'
import singleReducer from './single/reducer'

const persistConfig = {
  key: 'create-party',
  storage,
}

export default combineReducers({
  createReducer: persistReducer(persistConfig, createReducer),
  listReducer,
  singleReducer,
})
