import { combineReducers } from 'redux'
import auth from './auth/reducer'
import entities from './entities/reducer'

export default combineReducers({
  auth,
  entities,
})
