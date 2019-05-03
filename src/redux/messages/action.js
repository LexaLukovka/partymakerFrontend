export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

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
  set,
  setMany,
  remove,
}
