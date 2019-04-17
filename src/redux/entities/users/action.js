export const ADD_USER = 'ADD_USER'
export const ACTIVATE_USER = 'ACTIVATE_USER'

const add = user => ({
  type: ADD_USER,
  payload: user,
})

const activate = user_id => ({
  type: ACTIVATE_USER,
  payload: user_id,
})

export default {
  add,
  activate,
}
