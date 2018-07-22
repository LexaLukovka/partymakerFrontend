import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import alertReducer from './alert/reducer'
import settings from './settings'
import stepperReducer from './stepper/reducer'
import drawerReducer from './drawer/reducer'
import party from './party'

export default combineReducers({
  authReducer,
  party,
  stepperReducer,
  drawerReducer,
  alertReducer,
  settings,
})
