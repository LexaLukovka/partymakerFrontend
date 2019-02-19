import { combineReducers } from 'redux'

import layout from 'app/ui/layout/reducer'
import auth from 'app/auth/reducer'
import users from 'app/entities/users/reducer'

const reducers = combineReducers({
  auth,
  entities: combineReducers({
    users,
  }),
  ui: combineReducers({
    layout,
  }),
})

export default reducers
