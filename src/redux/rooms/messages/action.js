import room from 'api/Room'

export const LOAD_ROOM_MESSAGES = 'LOAD_ROOM_MESSAGES'
export const LOAD_ROOM_MESSAGES_FULFILLED = 'room/LOAD_ROOM_MESSAGES_FULFILLED'

export const CREATE_ROOM_MESSAGE = 'CREATE_ROOM_MESSAGE'
export const CREATE_ROOM_MESSAGE_FULFILLED = 'CREATE_ROOM_MESSAGE_FULFILLED'

/**
 * Async actions. Making API requests
 */

const list = (room_id, params) => ({
  type: LOAD_ROOM_MESSAGES,
  payload: room.messages.list(room_id, params)
})

const create = (room_id, form) => ({
  type: CREATE_ROOM_MESSAGE,
  payload: room.messages.create(room_id, form),
  meta: { room_id, form }
})

export default {
  list,
  create,
}
