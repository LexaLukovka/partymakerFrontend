import { combineReducers } from 'redux'
import users from './users/reducer'
import rooms from './rooms/reducer'

export default combineReducers({
  users,
  rooms
})
