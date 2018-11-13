import { LOAD_PLACE_FULFILLED, LOAD_PLACE_PENDING, LOAD_PLACE_REJECTED } from './action'

const placeReducer = (state, { type, payload }) => {
  switch (type) {

    case LOAD_PLACE_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_PLACE_FULFILLED:
      return {
        ...state,
        loading: false,
        ...payload,
      }

    case LOAD_PLACE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    default:
      return state
  }
}

export default placeReducer
