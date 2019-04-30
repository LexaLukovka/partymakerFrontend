import Guest from 'api/Guest'

export const LOAD_GUESTS = 'LOAD_GUESTS'
export const LOAD_GUESTS_FULFILLED = 'LOAD_GUESTS_FULFILLED'

export const KICK_GUEST = 'KICK_GUEST'
export const KICK_GUEST_FULFILLED = 'KICK_GUEST_FULFILLED'

/**
 * Async actions. Making API requests
 */

const list = (room_id) => ({
  type: LOAD_GUESTS,
  payload: Guest.list(room_id),
  meta: { room_id }
})

const kick = (room_id, user_id) => ({
  type: KICK_GUEST,
  payload: Guest.kick(room_id, user_id),
  meta: { room_id, user_id }
})

export default {
  list,
  kick,
}
