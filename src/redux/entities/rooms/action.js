import Room from 'api/Room'

export const LOAD_ROOMS = 'LOAD_ROOMS'
export const LOAD_ROOMS_PENDING = 'LOAD_ROOMS_PENDING'
export const LOAD_ROOMS_FULFILLED = 'LOAD_ROOMS_FULFILLED'
export const LOAD_ROOMS_REJECTED = 'LOAD_ROOMS_REJECTED'

export const LOAD_ROOM = 'LOAD_ROOM'
export const LOAD_ROOM_PENDING = 'LOAD_ROOM_PENDING'
export const LOAD_ROOM_FULFILLED = 'LOAD_ROOM_FULFILLED'
export const LOAD_ROOM_REJECTED = 'LOAD_ROOM_REJECTED'

export const CREATE_ROOM = 'CREATE_ROOM'
export const CREATE_ROOM_PENDING = 'CREATE_ROOM_PENDING'
export const CREATE_ROOM_FULFILLED = 'CREATE_ROOM_FULFILLED'
export const CREATE_ROOM_REJECTED = 'CREATE_ROOM_REJECTED'

export const UPDATE_ROOM = 'UPDATE_ROOM'
export const UPDATE_ROOM_PENDING = 'UPDATE_ROOM_PENDING'
export const UPDATE_ROOM_FULFILLED = 'UPDATE_ROOM_FULFILLED'
export const UPDATE_ROOM_REJECTED = 'UPDATE_ROOM_REJECTED'

export const DESTROY_ROOM = 'DESTROY_ROOM'
export const DESTROY_ROOM_PENDING = 'DESTROY_ROOM_PENDING'
export const DESTROY_ROOM_FULFILLED = 'DESTROY_ROOM_FULFILLED'
export const DESTROY_ROOM_REJECTED = 'DESTROY_ROOM_REJECTED'

export const SET_ROOM = 'SET_ROOM'
export const SET_ROOMS = 'SET_ROOMS'
export const REMOVE_ROOM = 'REMOVE_ROOM'

/**
 * Async actions. Making API requests
 */

const list = () => ({
  type: LOAD_ROOMS,
  payload: Room.list()
})

const create = () => ({
  type: CREATE_ROOM,
  payload: Room.create()
})

const update = (id, form) => ({
  type: UPDATE_ROOM,
  payload: Room.update(id, form)
})

const destroy = (room_id) => ({
  type: UPDATE_ROOM,
  payload: Room.destroy(room_id),
  meta: { room_id }
})

/**
 * Sync actions. Updating store
 */

const setMany = rooms => ({
  type: SET_ROOMS,
  payload: rooms,
})

const set = room => ({
  type: SET_ROOM,
  payload: room,
})

const remove = room_id => ({
  type: REMOVE_ROOM,
  payload: room_id,
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
