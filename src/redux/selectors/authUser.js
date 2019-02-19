import { createSelector } from 'reselect'

const authUser = (users, auth) => users[auth.user_id]

export default createSelector(
  state => state.entities.users,
  state => state.auth,
  authUser,
)
