import { combineReducers } from 'redux'
import auth from './auth/reducer'
import rooms from './rooms/reducer'
import users from './users/reducers'
import places from './places/reducer'
import messages from './messages/reducer'
import assets from './assets/reducers'
import invites from './invites/reducer'

export default combineReducers({
  auth,
  users,
  rooms,
  places,
  invites,
  messages,
  assets,
})
