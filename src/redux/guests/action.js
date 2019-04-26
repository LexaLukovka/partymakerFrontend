import Guest from 'api/Guest'

export const LOAD_GUESTS = 'LOAD_GUESTS'
export const LOAD_GUESTS_PENDING = 'LOAD_GUESTS_PENDING'
export const LOAD_GUESTS_FULFILLED = 'LOAD_GUESTS_FULFILLED'
export const LOAD_GUESTS_REJECTED = 'LOAD_GUESTS_REJECTED'

export const DESTROY_GUEST = 'DESTROY_GUEST'
export const DESTROY_GUEST_PENDING = 'DESTROY_GUEST_PENDING'
export const DESTROY_GUEST_FULFILLED = 'DESTROY_GUEST_FULFILLED'
export const DESTROY_GUEST_REJECTED = 'DESTROY_GUEST_REJECTED'

export const SET_GUESTS = 'SET_GUESTS'
export const REMOVE_GUEST = 'REMOVE_GUEST'

/**
 * Async actions. Making API requests
 */

const list = (room_id) => ({
  type: LOAD_GUESTS,
  payload: Guest.list(room_id),
  meta: { room_id }
})

const destroy = (guest_id) => ({
  type: DESTROY_GUEST,
  payload: Guest.destroy(guest_id),
  meta: { guest_id }
})

/**
 * Sync actions. Updating model
 */

const setMany = guests => ({
  type: SET_GUESTS,
  payload: guests,
})

const remove = guest_id => ({
  type: REMOVE_GUEST,
  payload: guest_id,
})

export default {
  list,
  setMany,
  destroy,
  remove,
}
