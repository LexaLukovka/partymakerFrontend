import Place from 'services/api/Place'

export const OPEN_PLACE = 'OPEN_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'
export const LOAD_PLACES_PENDING = 'LOAD_PLACES_PENDING'
export const LOAD_PLACES_REJECTED = 'LOAD_PLACES_REJECTED'
export const LOAD_PLACES_FULFILLED = 'LOAD_PLACES_FULFILLED'

const load = (params) => ({
  type: LOAD_PLACES,
  payload: Place.all(params),
})

const open = place_id => ({
  type: OPEN_PLACE,
  payload: place_id,
})

export default { load, open }
