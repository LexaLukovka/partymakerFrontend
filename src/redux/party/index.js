import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import createReducer from './create/reducer'
import listReducer from './list/reducer'
import myListReducer from './myList/reducer'
import singleReducer from './single/reducer'
import memberReducer from './member/reducer'

const persistConfig = {
  key: 'create-party',
  storage,
}

export default combineReducers({
  createReducer: persistReducer(persistConfig, createReducer),
  memberReducer,
  listReducer,
  myListReducer,
  singleReducer,
})
