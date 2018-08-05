import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import settings from './settings'
import party from './party'

import authReducer from './auth/reducer'
import layoutReducer from './layout/reducer'
import drawerReducer from './drawer/reducer'
import headerReducer from './header/reducer'
import alertReducer from './alert/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
}

const reducers = combineReducers({
  party,
  settings,
  authReducer,
  layoutReducer,
  drawerReducer,
  headerReducer,
  alertReducer,
})

export default persistReducer(persistConfig, reducers)
