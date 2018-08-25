import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import createReducer from './create/reducer'
import listReducer from './list/reducer'
import singleReducer from './single/reducer'
import memberReducer from './member/reducer'
import typesReducer from './types/reducer'

const persistConfig = {
  key: 'party',
  storage,
  whitelist: ['createReducer', 'singleReducer'],
}

const party = combineReducers({
  createReducer,
  memberReducer,
  listReducer,
  singleReducer,
  typesReducer,
})

export default persistReducer(persistConfig, party)
// : persistReducer(persistConfig, createReducer)
