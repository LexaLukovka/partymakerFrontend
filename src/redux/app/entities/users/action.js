export const ADD_USER = 'ADD_USER'
export const ACTIVATE_USERS = 'ACTIVATE_USERS'

const add = user => ({
  type: ADD_USER,
  payload: user,
})

const activate = userId => ({
  type: ACTIVATE_USERS,
  payload: userId,
})

export default {
  add,
  activate,
}
