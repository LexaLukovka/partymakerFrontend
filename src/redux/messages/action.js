import Message from 'api/Message'

export const LOAD_MESSAGES = 'LOAD_MESSAGES'
export const LOAD_MESSAGES_PENDING = 'LOAD_MESSAGES_PENDING'
export const LOAD_MESSAGES_FULFILLED = 'LOAD_MESSAGES_FULFILLED'
export const LOAD_MESSAGES_REJECTED = 'LOAD_MESSAGES_REJECTED'

export const LOAD_MESSAGE = 'LOAD_MESSAGE'
export const LOAD_MESSAGE_PENDING = 'LOAD_MESSAGE_PENDING'
export const LOAD_MESSAGE_FULFILLED = 'LOAD_MESSAGE_FULFILLED'
export const LOAD_MESSAGE_REJECTED = 'LOAD_MESSAGE_REJECTED'

export const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const CREATE_MESSAGE_PENDING = 'CREATE_MESSAGE_PENDING'
export const CREATE_MESSAGE_FULFILLED = 'CREATE_MESSAGE_FULFILLED'
export const CREATE_MESSAGE_REJECTED = 'CREATE_MESSAGE_REJECTED'

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
export const UPDATE_MESSAGE_PENDING = 'UPDATE_MESSAGE_PENDING'
export const UPDATE_MESSAGE_FULFILLED = 'UPDATE_MESSAGE_FULFILLED'
export const UPDATE_MESSAGE_REJECTED = 'UPDATE_MESSAGE_REJECTED'

export const DESTROY_MESSAGE = 'DESTROY_MESSAGE'
export const DESTROY_MESSAGE_PENDING = 'DESTROY_MESSAGE_PENDING'
export const DESTROY_MESSAGE_FULFILLED = 'DESTROY_MESSAGE_FULFILLED'
export const DESTROY_MESSAGE_REJECTED = 'DESTROY_MESSAGE_REJECTED'

export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const SET_CURRENT_MESSAGE = 'SET_CURRENT_MESSAGE'

/**
 * Async actions. Making API requests
 */

const list = (room_id) => ({
  type: LOAD_MESSAGES,
  payload: Message.list(room_id)
})

const create = (form) => ({
  type: CREATE_MESSAGE,
  payload: Message.create(form)
})

const update = (id, form) => ({
  type: UPDATE_MESSAGE,
  payload: Message.update(id, form)
})

const destroy = (message_id) => ({
  type: UPDATE_MESSAGE,
  payload: Message.destroy(message_id),
  meta: { message_id }
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
  update,
  set,
  setMany,
  destroy,
  remove,
}
