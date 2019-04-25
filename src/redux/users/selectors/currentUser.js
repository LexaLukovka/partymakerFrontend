import { createSelector } from 'reselect'

const currentUser = (users, user_id) => {
  return users[user_id]
}

export default createSelector(
  state => state.users.entities,
  state => state.auth.user_id,
  currentUser,
)
