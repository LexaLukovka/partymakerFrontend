import Invite from 'api/Invite'

export const LOAD_INVITE = 'LOAD_INVITE'
export const LOAD_INVITE_PENDING = 'LOAD_INVITE_PENDING'
export const LOAD_INVITE_FULFILLED = 'LOAD_INVITE_FULFILLED'
export const LOAD_INVITE_REJECTED = 'LOAD_INVITE_REJECTED'

export const LOAD_INVITE_BY_TOKEN = 'LOAD_INVITE_BY_TOKEN'
export const LOAD_INVITE_BY_TOKEN_PENDING = 'LOAD_INVITE_BY_TOKEN_PENDING'
export const LOAD_INVITE_BY_TOKEN_FULFILLED = 'LOAD_INVITE_BY_TOKEN_FULFILLED'
export const LOAD_INVITE_BY_TOKEN_REJECTED = 'LOAD_INVITE_BY_TOKEN_REJECTED'

export const ACCEPT_INVITE = 'ACCEPT_INVITE'
export const ACCEPT_INVITE_PENDING = 'ACCEPT_INVITE_PENDING'
export const ACCEPT_INVITE_FULFILLED = 'ACCEPT_INVITE_FULFILLED'
export const ACCEPT_INVITE_REJECTED = 'ACCEPT_INVITE_REJECTED'

export const CREATE_INVITE = 'CREATE_INVITE'
export const CREATE_INVITE_PENDING = 'CREATE_INVITE_PENDING'
export const CREATE_INVITE_FULFILLED = 'CREATE_INVITE_FULFILLED'
export const CREATE_INVITE_REJECTED = 'CREATE_INVITE_REJECTED'

export const UPDATE_INVITE = 'UPDATE_INVITE'
export const UPDATE_INVITE_PENDING = 'UPDATE_INVITE_PENDING'
export const UPDATE_INVITE_FULFILLED = 'UPDATE_INVITE_FULFILLED'
export const UPDATE_INVITE_REJECTED = 'UPDATE_INVITE_REJECTED'

export const DESTROY_INVITE = 'DESTROY_INVITE'
export const DESTROY_INVITE_PENDING = 'DESTROY_INVITE_PENDING'
export const DESTROY_INVITE_FULFILLED = 'DESTROY_INVITE_FULFILLED'
export const DESTROY_INVITE_REJECTED = 'DESTROY_INVITE_REJECTED'

export const SET_INVITE = 'SET_INVITE'
export const SET_INVITES = 'SET_INVITES'
export const REMOVE_INVITE = 'REMOVE_INVITE'
export const SET_CURRENT_INVITE = 'SET_CURRENT_INVITE'

/**
 * Async actions. Making API requests
 */

const load = (room_id) => ({
  type: LOAD_INVITE,
  payload: Invite.find(room_id),
  meta: { room_id }
})

const loadByToken = (token) => ({
  type: LOAD_INVITE_BY_TOKEN,
  payload: Invite.fromToken(token),
  meta: { token }
})

const accept = (user_id, token) => ({
  type: ACCEPT_INVITE,
  payload: Invite.accept(user_id, token),
  meta: { user_id, token }
})

const create = (room_id, form) => ({
  type: CREATE_INVITE,
  payload: Invite.create(room_id, form),
  meta: { room_id }
})

const update = (room_id, form) => ({
  type: UPDATE_INVITE,
  payload: Invite.update(room_id, form),
  meta: { room_id }

})

const destroy = (room_id) => ({
  type: DESTROY_INVITE,
  payload: Invite.destroy(room_id),
  meta: { room_id }
})

/**
 * Sync actions. Updating store
 */

const set = invite => ({
  type: SET_INVITE,
  payload: invite,
})

const remove = invite_id => ({
  type: REMOVE_INVITE,
  payload: invite_id,
})

const setCurrent = invite_id => ({
  type: SET_CURRENT_INVITE,
  payload: invite_id,
})

export default {
  load,
  loadByToken,
  accept,
  create,
  update,
  set,
  destroy,
  remove,
  setCurrent
}
