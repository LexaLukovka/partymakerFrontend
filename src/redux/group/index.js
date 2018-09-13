import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import buttonReducer from './buttonCreate/reducer'
import createReducer from './create/reducer'
import listReducer from './list/reducer'
import singleReducer from './single/reducer'

const persistConfig = {
  key: 'party',
  storage,
  whitelist: ['createReducer', 'singleReducer'],
}

const group = combineReducers({
  buttonReducer,
  createReducer,
  listReducer,
  singleReducer,
})

export default persistReducer(persistConfig, group)