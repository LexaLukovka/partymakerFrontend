import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import createReducer from './create/reducer'
import listReducer from './list/reducer'
import singleReducer from './single/reducer'
import memberReducer from './member/reducer'

const persistConfig = {
  key: 'group',
  storage,
  whitelist: ['createReducer', 'singleReducer'],
}

const group = combineReducers({
  createReducer,
  listReducer,
  singleReducer,
  memberReducer,
})

export default persistReducer(persistConfig, group)
