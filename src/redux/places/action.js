import Place from 'api/Place'

export const LOAD_PLACES = 'LOAD_PLACES'
export const LOAD_PLACES_PENDING = 'LOAD_PLACES_PENDING'
export const LOAD_PLACES_FULFILLED = 'LOAD_PLACES_FULFILLED'
export const LOAD_PLACES_REJECTED = 'LOAD_PLACES_REJECTED'

export const LOAD_PLACE = 'LOAD_PLACE'
export const LOAD_PLACE_PENDING = 'LOAD_PLACE_PENDING'
export const LOAD_PLACE_FULFILLED = 'LOAD_PLACE_FULFILLED'
export const LOAD_PLACE_REJECTED = 'LOAD_PLACE_REJECTED'

export const CREATE_PLACE = 'CREATE_PLACE'
export const CREATE_PLACE_PENDING = 'CREATE_PLACE_PENDING'
export const CREATE_PLACE_FULFILLED = 'CREATE_PLACE_FULFILLED'
export const CREATE_PLACE_REJECTED = 'CREATE_PLACE_REJECTED'

export const UPDATE_PLACE = 'UPDATE_PLACE'
export const UPDATE_PLACE_PENDING = 'UPDATE_PLACE_PENDING'
export const UPDATE_PLACE_FULFILLED = 'UPDATE_PLACE_FULFILLED'
export const UPDATE_PLACE_REJECTED = 'UPDATE_PLACE_REJECTED'

export const DESTROY_PLACE = 'DESTROY_PLACE'
export const DESTROY_PLACE_PENDING = 'DESTROY_PLACE_PENDING'
export const DESTROY_PLACE_FULFILLED = 'DESTROY_PLACE_FULFILLED'
export const DESTROY_PLACE_REJECTED = 'DESTROY_PLACE_REJECTED'

export const SET_PLACE = 'SET_PLACE'
export const SET_PLACES = 'SET_PLACES'
export const REMOVE_PLACE = 'REMOVE_PLACE'

/**
 * Async actions. Making API requests
 */

const list = () => ({
  type: LOAD_PLACES,
  payload: Place.list()
})

const create = () => ({
  type: CREATE_PLACE,
  payload: Place.create()
})

const update = (id, form) => ({
  type: UPDATE_PLACE,
  payload: Place.update(id, form)
})

const destroy = (place_id) => ({
  type: UPDATE_PLACE,
  payload: Place.destroy(place_id),
  meta: { place_id }
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
  list,
  create,
  update,
  set,
  setMany,
  destroy,
  remove,
}
