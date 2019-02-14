import { combineReducers } from 'redux'
import layoutReducer from './layout/reducer'

export default combineReducers({
  layout: layoutReducer,
})
