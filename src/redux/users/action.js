export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const REMOVE_USER = 'REMOVE_USER'

/**
 * Sync actions. Updating store
 */

const setMany = users => ({
  type: SET_USERS,
  payload: users,
})

const set = user => ({
  type: SET_USER,
  payload: user,
})

const remove = user_id => ({
  type: REMOVE_USER,
  payload: user_id,
})

export default {
  set,
  setMany,
  remove,
}
