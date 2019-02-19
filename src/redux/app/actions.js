import auth from './auth/action'
import users from './entities/users/action'
import layout from './ui/layout/action'

export default {
  auth,
  entities: {
    users,
  },
  ui: {
    layout,
  },
}
