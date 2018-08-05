import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import alertReducer from './alert/reducer'
import settings from './settings'
import drawerReducer from './drawer/reducer'
import headerReducer from 'state/header/reducer'
import party from './party'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer', 'headerReducer'],
}

const reducers = combineReducers({
  authReducer,
  party,
  drawerReducer,
  headerReducer,
  alertReducer,
  settings,
})

export default persistReducer(persistConfig, reducers)
