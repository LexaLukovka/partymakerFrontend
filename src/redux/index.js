import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import place from './place'
import group from './group'
import event from './event'

import authReducer from './auth/reducer'
import userReducer from './user/reducer'
import layoutReducer from './layout/reducer'
import drawerReducer from './drawer/reducer'
import headerReducer from './header/reducer'
import alertReducer from './alert/reducer'
import actionButtonReducer from './actionButton/reducer'
import pictureModalReducer from './pictureModal/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
}

const reducers = combineReducers({
  place,
  group,
  event,
  authReducer,
  userReducer,
  layoutReducer,
  drawerReducer,
  headerReducer,
  alertReducer,
  pictureModalReducer,
  actionButtonReducer,
})

export default persistReducer(persistConfig, reducers)
