import {
  VOTE_PLACE, RESET_VOTED_PLACE,
  VOTE_PLACE_PENDING,
  VOTE_PLACE_REJECTED,
  VOTE_PLACE_FULFILLED,
  IS_VOTED_PLACE_PENDING,
  IS_VOTED_PLACE_REJECTED,
  IS_VOTED_PLACE_FULFILLED,
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

    case VOTE_PLACE_PENDING:
      return { ...state, loading: true }

    case VOTE_PLACE_REJECTED:
      return { ...state, loading: false, error: payload }

    case VOTE_PLACE_FULFILLED:
      return { ...state, loading: false }

    case IS_VOTED_PLACE_PENDING:
      return { ...state, loading: true }

    case IS_VOTED_PLACE_REJECTED:
      return { ...state, loading: false, error: payload }

    case IS_VOTED_PLACE_FULFILLED:
      return { ...state, loading: false, vote: payload.data }

    default:
      return state
  }
}

export default votesReducer
