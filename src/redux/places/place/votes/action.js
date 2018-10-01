import Place from 'services/api/Place'

export const VOTE_PLACE = 'VOTE_PLACE'
export const RESET_VOTED_PLACE = 'RESET_VOTED_PLACE'
export const SEND_VOTE_PLACE = 'SEND_VOTE_PLACE'
export const VOTE_PLACE_PENDING = 'SEND_VOTE_PLACE_PENDING'
export const VOTE_PLACE_REJECTED = 'SEND_VOTE_PLACE_REJECTED'
export const VOTE_PLACE_FULFILLED = 'SEND_VOTE_PLACE_FULFILLED'

export const CHECK_USER_VOTED_PLACE = 'CHECK_USER_VOTED_PLACE'
export const IS_VOTED_PLACE_PENDING = 'CHECK_USER_VOTED_PLACE_PENDING'
export const IS_VOTED_PLACE_REJECTED = 'CHECK_USER_VOTED_PLACE_REJECTED'
export const IS_VOTED_PLACE_FULFILLED = 'CHECK_USER_VOTED_PLACE_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const isUserVoted = (id) => ({
  type: CHECK_USER_VOTED_PLACE,
  payload: Place.isUserVoted(id),
})

// noinspection JSUnusedGlobalSymbols
export const vote = (id, rating) => dispatch => {
  dispatch({
    type: VOTE_PLACE,
    payload: rating,
  })

  dispatch({
    type: SEND_VOTE_PLACE,
    payload: Place.vote(id, rating),
  })
}

// noinspection JSUnusedGlobalSymbols
export const reset = () => ({
  type: RESET_VOTED_PLACE,
})
