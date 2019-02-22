import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import layout from 'app/ui/layout/reducer'
import auth from 'app/auth/reducer'
import users from 'app/entities/users/reducer'

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
  }),
})

export default persistReducer(persistConfig, reducers)
