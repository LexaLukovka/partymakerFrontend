import { combineReducers } from 'redux'
import listReducer from './list/reducer'
import singleReducer from './single/reducer'


export default combineReducers({
  listReducer,
  singleReducer,
})
