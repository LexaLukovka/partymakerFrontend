import Place from 'services/api/Place'

export const LOAD_PLACE = 'LOAD_PLACE'
export const LOAD_PLACE_PENDING = 'LOAD_PLACE_PENDING'
export const LOAD_PLACE_FULFILLED = 'LOAD_PLACE_FULFILLED'
export const LOAD_PLACE_REJECTED = 'LOAD_PLACE_REJECTED'


const load = place_id => ({
  type: LOAD_PLACE,
  payload: Place.find(place_id),
  meta: { place_id },
})

export default { load }
