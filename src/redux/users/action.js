export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USER_ONLINE = 'SET_USER_ONLINE'
export const SET_USER_OFFLINE = 'SET_USER_OFFLINE'

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

const online = (user_id) => ({
  type: SET_USER_ONLINE,
  payload: user_id,
})

const offline = (user_id) => ({
  type: SET_USER_OFFLINE,
  payload: user_id,
})

export default {
  set,
  setMany,
  remove,
  online,
  offline
}
