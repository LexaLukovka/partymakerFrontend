import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from 'app/auth/reducer'

import users from 'app/entities/users/reducer'

import layout from 'app/ui/layout/reducer'
import alert from 'app/ui/alert/reducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui']
}

const reducers = combineReducers({
  auth,
  entities: combineReducers({
    users,
  }),
  ui: combineReducers({
    layout,
    alert,
  }),
})

export default persistReducer(persistConfig, reducers)
