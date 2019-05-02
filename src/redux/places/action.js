export const SET_PLACE = 'SET_PLACE'
export const SET_PLACES = 'SET_PLACES'
export const REMOVE_PLACE = 'REMOVE_PLACE'

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
  set,
  setMany,
  remove,
}
