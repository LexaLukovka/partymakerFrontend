export const ADD_USER = 'ADD_USER'

const add = user => ({
  type: ADD_USER,
  payload: user,
})

export default {
  add
}
