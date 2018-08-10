import Place from 'services/api/Place'

export const LOAD_PLACE = 'LOAD_PLACE'
export const LOAD_PLACE_PENDING = 'LOAD_PLACE_PENDING'
export const LOAD_PLACE_REJECTED = 'LOAD_PLACE_REJECTED'
export const LOAD_PLACE_FULFILLED = 'LOAD_PLACE_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const show = id => ({
  type: LOAD_PLACE,
  payload: Place.find(id),
})
