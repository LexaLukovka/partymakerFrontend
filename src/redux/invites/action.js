import Invite from 'api/Invite'

export const LOAD_INVITE = 'LOAD_INVITE'
export const LOAD_INVITE_PENDING = 'LOAD_INVITE_PENDING'
export const LOAD_INVITE_FULFILLED = 'LOAD_INVITE_FULFILLED'
export const LOAD_INVITE_REJECTED = 'LOAD_INVITE_REJECTED'

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
export const SET_INVITE_STATUS = 'SET_INVITE_STATUS'

/**
 * Async actions. Making API requests
 */

const load = (room_id) => ({
  type: LOAD_INVITE,
  payload: Invite.find(room_id)
})

const create = () => ({
  type: CREATE_INVITE,
  payload: Invite.create()
})

const update = (id, form) => ({
  type: UPDATE_INVITE,
  payload: Invite.update(id, form)
})

const destroy = (invite_id) => ({
  type: UPDATE_INVITE,
  payload: Invite.destroy(invite_id),
  meta: { invite_id }
})

const set = invite => ({
  type: SET_INVITE,
  payload: invite,
})

const remove = invite_id => ({
  type: REMOVE_INVITE,
  payload: invite_id,
})

export default {
  load,
  create,
  update,
  set,
  destroy,
  remove,
}
