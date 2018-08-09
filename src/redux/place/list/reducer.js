import {
  LOAD_PLACES_FULFILLED,
  LOAD_PLACES_PENDING,
  LOAD_PLACES_REJECTED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  parties: [],
}

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PLACES_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_PLACES_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case LOAD_PLACES_FULFILLED: {
      return {
        ...state,
        loading: false,
        places: payload.data,
      }
    }

    default: {
      return state
    }
  }
}

export default listReducer
