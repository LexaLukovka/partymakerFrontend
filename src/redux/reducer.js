import { combineReducers } from 'redux'
import auth from './auth/reducer'
import rooms from './rooms/reducers'
import users from './users/reducers'
import places from './places/reducers'
import messages from './messages/reducers'
import assets from './assets/reducers'

export default combineReducers({
  auth,
  users,
  rooms,
  places,
  messages,
  assets,
})
