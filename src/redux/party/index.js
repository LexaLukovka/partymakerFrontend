import { combineReducers } from 'redux'
import createReducer from './create/reducer'
import listReducer from './list/reducer'
import singleReducer from './single/reducer'

export default combineReducers({
  createReducer,
  listReducer,
  singleReducer,
})
