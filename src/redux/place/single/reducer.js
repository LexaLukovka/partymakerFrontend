import { LOAD_PLACE_FULFILLED, LOAD_PLACE_PENDING, LOAD_PLACE_REJECTED, RESET_PLACE } from './action'

const initialState = {
  loading: false,
  place: {},
  error: null,
}

const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PLACE_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_PLACE_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case LOAD_PLACE_FULFILLED:
      return {
        ...state,
        loading: false,
        place: payload,
      }

    case RESET_PLACE:
      return {
        ...state,
        ...initialState,
      }

    default:
      return state
  }
}

export default singleReducer
