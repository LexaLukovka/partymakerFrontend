import User from 'services/api/User'

export const FIND_USER = 'FIND_USER'
export const FIND_USER_PENDING = 'FIND_USER_PENDING'
export const FIND_USER_REJECTED = 'FIND_USER_REJECTED'
export const FIND_USER_FULFILLED = 'FIND_USER_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const find = (id) => ({
  type: FIND_USER,
  payload: User.find(id),
})

