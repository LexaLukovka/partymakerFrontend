import Room from 'api/Room'

export const LOAD_ROOMS = 'LOAD_ROOMS'
export const LOAD_ROOMS_FULFILLED = 'LOAD_ROOMS_FULFILLED'

export const LOAD_ROOM = 'LOAD_ROOM'
export const LOAD_ROOM_FULFILLED = 'LOAD_ROOM_FULFILLED'

export const CREATE_ROOM = 'CREATE_ROOM'
export const CREATE_ROOM_FULFILLED = 'CREATE_ROOM_FULFILLED'

export const UPDATE_ROOM = 'UPDATE_ROOM'
export const UPDATE_ROOM_FULFILLED = 'UPDATE_ROOM_FULFILLED'

export const LEAVE_ROOM = 'LEAVE_ROOM'
export const LEAVE_ROOM_FULFILLED = 'LEAVE_ROOM_FULFILLED'

export const SET_ROOM = 'SET_ROOM'
export const SET_ROOMS = 'SET_ROOMS'
export const REMOVE_ROOM = 'REMOVE_ROOM'
export const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM'

export const SET_ROOM_GUESTS = 'SET_ROOM_GUESTS'
export const SET_ROOM_GUEST = 'SET_ROOM_GUEST'
export const SET_ROOM_MESSAGES = 'SET_ROOM_MESSAGES'
export const SET_ROOM_MESSAGE = 'SET_ROOM_MESSAGE'
export const SET_ROOM_INVITE = 'SET_ROOM_INVITE'
export const SET_ROOM_STATUS = 'SET_ROOM_STATUS'
export const SET_ROOM_PLACE = 'SET_ROOM_PLACE'
export const REMOVE_ROOM_GUEST = 'REMOVE_ROOM_GUEST'

/**
 * Async actions. Making API requests
 */

const list = () => ({
  type: LOAD_ROOMS,
  payload: Room.list()
})

const find = (id) => ({
  type: LOAD_ROOM,
  payload: Room.find(id)
})

const create = () => ({
  type: CREATE_ROOM,
  payload: Room.create()
})

const update = (id, form) => ({
  type: UPDATE_ROOM,
  payload: Room.update(id, form)
})

const leave = (room_id) => ({
  type: LEAVE_ROOM,
  payload: Room.leave(room_id),
  meta: { room_id }
})

/**
 * Sync actions. Updating model
 */

const setMany = rooms => ({
  type: SET_ROOMS,
  payload: rooms,
})

const set = room => ({
  type: SET_ROOM,
  payload: room,
})

const setCurrent = room_id => ({
  type: SET_CURRENT_ROOM,
  payload: room_id,
})

const remove = room_id => ({
  type: REMOVE_ROOM,
  payload: room_id,
})

/**
 * Sync actions. Updating relations
 */

const setGuests = (room_id, guests_ids) => ({
  type: SET_ROOM_GUESTS,
  payload: guests_ids,
  meta: { room_id }
})

const setGuest = (room_id, guest_id) => ({
  type: SET_ROOM_GUEST,
  payload: guest_id,
  meta: { room_id }
})

const removeGuest = (room_id, user_id) => ({
  type: REMOVE_ROOM_GUEST,
  payload: user_id,
  meta: { room_id }
})

const setMessages = (room_id, messages_ids) => ({
  type: SET_ROOM_MESSAGES,
  payload: messages_ids,
  meta: { room_id }
})

const setMessage = (room_id, message_id) => ({
  type: SET_ROOM_MESSAGE,
  payload: message_id,
  meta: { room_id }
})

const setInvite = (room_id, invite_id) => ({
  type: SET_ROOM_INVITE,
  payload: invite_id,
  meta: { room_id }
})

const setPlace = (room_id, place_id) => ({
  type: SET_ROOM_PLACE,
  payload: place_id,
  meta: { room_id }
})

/**
 * Sync actions. Room status
 */

const status = (params) => ({
  type: SET_ROOM_STATUS,
  payload: params,
})

export default {
  list,
  create,
  update,
  find,
  set,
  setCurrent,
  setMany,
  leave,
  remove,
  setGuests,
  removeGuest,
  setGuest,
  setMessages,
  setMessage,
  setInvite,
  setPlace,
  status,
}
