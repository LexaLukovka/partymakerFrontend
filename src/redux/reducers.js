import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import layoutReducer from './layout/reducer'

export default combineReducers({
  auth: authReducer,
  layout: layoutReducer,
})
