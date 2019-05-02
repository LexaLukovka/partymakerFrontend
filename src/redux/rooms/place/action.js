import room from 'api/Room'

export const LOAD_ROOM_PLACE = 'LOAD_ROOM_PLACE'
export const LOAD_PLACE_FULFILLED = 'LOAD_PLACE_FULFILLED'

export const CREATE_ROOM_PLACE = 'CREATE_ROOM_PLACE'
export const CREATE_PLACE_FULFILLED = 'CREATE_PLACE_FULFILLED'

export const UPDATE_ROOM_PLACE = 'UPDATE_ROOM_PLACE'
export const UPDATE_PLACE_FULFILLED = 'UPDATE_PLACE_FULFILLED'

export const DESTROY_ROOM_PLACE = 'DESTROY_ROOM_PLACE'
export const DESTROY_PLACE_FULFILLED = 'DESTROY_PLACE_FULFILLED'

/**
 * Async actions. Making API requests
 */

const load = (room_id) => ({
  type: LOAD_ROOM_PLACE,
  payload: room.place.load(room_id),
  meta: { room_id }
})

const create = (room_id, form) => ({
  type: CREATE_ROOM_PLACE,
  payload: room.place.create(room_id, form),
  meta: { room_id }
})

const update = (room_id, form) => ({
  type: UPDATE_ROOM_PLACE,
  payload: room.place.update(room_id, form),
  meta: { room_id }
})

const destroy = (room_id) => ({
  type: DESTROY_ROOM_PLACE,
  payload: room_id.place.destroy(room_id),
  meta: { room_id }
})

export default {
  load,
  create,
  update,
  destroy,
}
