import Place from 'services/api/Place'

export const CAN_SELECT = 'CAN_SELECT'

export const LOAD_PLACES = 'LOAD_PLACES'
export const LOAD_PLACES_PENDING = 'LOAD_PLACES_PENDING'
export const LOAD_PLACES_REJECTED = 'LOAD_PLACES_REJECTED'
export const LOAD_PLACES_FULFILLED = 'LOAD_PLACES_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const load = (searchParams) => ({
  type: LOAD_PLACES,
  payload: Place.all(searchParams),
})

export const canSelect = (canSelected) => ({
  type: CAN_SELECT,
  payload: canSelected,
})
