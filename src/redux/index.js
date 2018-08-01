import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import alertReducer from './alert/reducer'
import settings from './settings'
import drawerReducer from './drawer/reducer'
import party from './party'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
}

const reducers = combineReducers({
  authReducer,
  party,
  drawerReducer,
  alertReducer,
  settings,
})

export default persistReducer(persistConfig, reducers)
