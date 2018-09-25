import { LOAD_EVENT_FULFILLED, LOAD_EVENT_PENDING, LOAD_EVENT_REJECTED } from './action'

const initialState = {
  loading: false,
  event: {},
  error: null,
}

const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_EVENT_PENDING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_EVENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case LOAD_EVENT_FULFILLED:
      return {
        ...state,
        loading: false,
        event: payload,
      }

    default:
      return state
  }
}

export default singleReducer
