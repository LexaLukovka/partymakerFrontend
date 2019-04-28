import Place from 'api/Place'

export const LOAD_PLACE = 'LOAD_PLACE'
export const LOAD_PLACE_FULFILLED = 'LOAD_PLACE_FULFILLED'

export const CREATE_PLACE = 'CREATE_PLACE'
export const CREATE_PLACE_FULFILLED = 'CREATE_PLACE_FULFILLED'

export const UPDATE_PLACE = 'UPDATE_PLACE'
export const UPDATE_PLACE_FULFILLED = 'UPDATE_PLACE_FULFILLED'

export const DESTROY_PLACE = 'DESTROY_PLACE'
export const DESTROY_PLACE_FULFILLED = 'DESTROY_PLACE_FULFILLED'

export const SET_PLACE = 'SET_PLACE'
export const SET_PLACES = 'SET_PLACES'
export const REMOVE_PLACE = 'REMOVE_PLACE'

/**
 * Async actions. Making API requests
 */

const load = (room_id) => ({
  type: LOAD_PLACE,
  payload: Place.load(room_id),
  meta: { room_id }
})

const create = (room_id, form) => ({
  type: CREATE_PLACE,
  payload: Place.create(room_id, form),
  meta: { room_id }
})

const update = (room_id, form) => ({
  type: UPDATE_PLACE,
  payload: Place.update(room_id, form),
  meta: { room_id }
})

const destroy = (room_id) => ({
  type: DESTROY_PLACE,
  payload: Place.destroy(room_id),
  meta: { room_id }
})

/**
 * Sync actions. Updating store
 */

const setMany = places => ({
  type: SET_PLACES,
  payload: places,
})

const set = place => ({
  type: SET_PLACE,
  payload: place,
})

const remove = place_id => ({
  type: REMOVE_PLACE,
  payload: place_id,
})

export default {
  load,
  create,
  update,
  set,
  setMany,
  destroy,
  remove,
}
