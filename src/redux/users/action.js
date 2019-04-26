import User from 'api/Guest'

export const LOAD_USERS = 'LOAD_USERS'
export const LOAD_USERS_PENDING = 'LOAD_USERS_PENDING'
export const LOAD_USERS_FULFILLED = 'LOAD_USERS_FULFILLED'
export const LOAD_USERS_REJECTED = 'LOAD_USERS_REJECTED'

export const LOAD_USER = 'LOAD_USER'
export const LOAD_USER_PENDING = 'LOAD_USER_PENDING'
export const LOAD_USER_FULFILLED = 'LOAD_USER_FULFILLED'
export const LOAD_USER_REJECTED = 'LOAD_USER_REJECTED'

export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_PENDING = 'CREATE_USER_PENDING'
export const CREATE_USER_FULFILLED = 'CREATE_USER_FULFILLED'
export const CREATE_USER_REJECTED = 'CREATE_USER_REJECTED'

export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING'
export const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED'
export const UPDATE_USER_REJECTED = 'UPDATE_USER_REJECTED'

export const DESTROY_USER = 'DESTROY_USER'
export const DESTROY_USER_PENDING = 'DESTROY_USER_PENDING'
export const DESTROY_USER_FULFILLED = 'DESTROY_USER_FULFILLED'
export const DESTROY_USER_REJECTED = 'DESTROY_USER_REJECTED'

export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const REMOVE_USER = 'REMOVE_USER'

/**
 * Async actions. Making API requests
 */

const list = () => ({
  type: LOAD_USERS,
  payload: User.list()
})

const create = () => ({
  type: CREATE_USER,
  payload: User.create()
})

const update = (id, form) => ({
  type: UPDATE_USER,
  payload: User.update(id, form)
})

const destroy = (user_id) => ({
  type: UPDATE_USER,
  payload: User.destroy(user_id),
  meta: { user_id }
})

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
  list,
  create,
  update,
  set,
  setMany,
  destroy,
  remove,
}
