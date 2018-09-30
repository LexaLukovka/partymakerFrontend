import Place from 'services/api/Place'

export const LOAD_PLACE = 'LOAD_PLACE'
export const LOAD_PLACE_PENDING = 'SAVE_PLACE_PENDING'
export const LOAD_PLACE_FULFILLED = 'LOAD_PLACE_FULFILLED'
export const LOAD_PLACE_REJECTED = 'LOAD_PLACE_REJECTED'

export const SAVE_PLACE = 'SAVE_PLACE'
export const OPEN_PLACE = 'OPEN_PLACE'

export const VOTE_PLACE = 'LOAD_PLACE'
export const VOTE_PLACE_PENDING = 'VOTE_PLACE_PENDING'
export const VOTE_PLACE_FULFILLED = 'VOTE_PLACE_FULFILLED'
export const VOTE_PLACE_REJECTED = 'VOTE_PLACE_REJECTED'

export const load = place_id => ({
  type: LOAD_PLACE,
  payload: Place.find(place_id),
})

export const save = place => ({
  type: SAVE_PLACE,
  payload: place,
})

export const open = place_id => ({
  type: OPEN_PLACE,
  payload: place_id,
})

export const vote = (place_id, rating) => ({
  type: VOTE_PLACE,
  payload: Place.vote(place_id, rating),
})

export default {
  save,
  open,
  vote,
  load,
}
