import Message from 'api/Message'

export const LOAD_MESSAGES = 'LOAD_MESSAGES'
export const LOAD_MESSAGES_FULFILLED = 'LOAD_MESSAGES_FULFILLED'

export const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const CREATE_MESSAGE_FULFILLED = 'CREATE_MESSAGE_FULFILLED'

export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

/**
 * Async actions. Making API requests
 */

const list = (room_id, params) => ({
  type: LOAD_MESSAGES,
  payload: Message.list(room_id, params)
})

const create = (room_id, form) => ({
  type: CREATE_MESSAGE,
  payload: Message.create(room_id, form),
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
