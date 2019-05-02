import room from 'api/Room'

export const LOAD_MESSAGES = 'LOAD_ROOM_MESSAGES'
export const LOAD_MESSAGES_FULFILLED = 'room/LOAD_ROOM_MESSAGES_FULFILLED'

export const CREATE_MESSAGE = 'CREATE_ROOM_MESSAGE'
export const CREATE_MESSAGE_FULFILLED = 'CREATE_ROOM_MESSAGE_FULFILLED'

export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

/**
 * Async actions. Making API requests
 */

const list = (room_id, params) => ({
  type: LOAD_MESSAGES,
  payload: room.messages.list(room_id, params)
})

const create = (room_id, form) => ({
  type: CREATE_MESSAGE,
  payload: room.messages.create(room_id, form),
  meta: { room_id, form }
})

/**
 * Sync actions. Updating store
 */

const setMany = messages => ({
  type: SET_MESSAGES,
  payload: messages,
})

const set = message => ({
  type: SET_MESSAGE,
  payload: message,
})

const remove = message_id => ({
  type: REMOVE_MESSAGE,
  payload: message_id,
})

export default {
  list,
  create,
  set,
  setMany,
  remove,
}
