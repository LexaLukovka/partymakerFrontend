import {
  LOAD_EVENTS_FULFILLED,
  LOAD_EVENTS_PENDING,
  LOAD_EVENTS_REJECTED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  page: null,
  total: null,
  limit: null,
  events: [],
}

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_EVENTS_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_EVENTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case LOAD_EVENTS_FULFILLED:
      return {
        ...state,
        loading: false,
        page: payload.page,
        limit: payload.perPage,
        total: payload.total,
        events: payload.data,
      }

    default: {
      return state
    }
  }
}

export default listReducer
