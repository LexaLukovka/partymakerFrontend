import {
  VOTE_PLACE, RESET_VOTED_PLACE,
  SEND_VOTE_PLACE_PENDING, SEND_VOTE_PLACE_REJECTED, SEND_VOTE_PLACE_FULFILLED,
  CHECK_USER_VOTED_PLACE_PENDING, CHECK_USER_VOTED_PLACE_REJECTED, CHECK_USER_VOTED_PLACE_FULFILLED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  vote: null,
}

const votesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VOTE_PLACE:
      return { ...state, vote: payload }

    case RESET_VOTED_PLACE:
      return { ...state, ...initialState }

    case SEND_VOTE_PLACE_PENDING:
      return { ...state, loading: true }

    case SEND_VOTE_PLACE_REJECTED:
      return { ...state, loading: false, error: payload }

    case SEND_VOTE_PLACE_FULFILLED:
      return { ...state, loading: false }

    case CHECK_USER_VOTED_PLACE_PENDING:
      return { ...state, loading: true }

    case CHECK_USER_VOTED_PLACE_REJECTED:
      return { ...state, loading: false, error: payload }

    case CHECK_USER_VOTED_PLACE_FULFILLED:
      return { ...state, loading: false, vote: payload.data }

    default:
      return state
  }
}

export default votesReducer
