import {
  LOAD_PARTIES_FULFILLED,
  LOAD_PARTIES_PENDING,
  LOAD_PARTIES_REJECTED,

  USER_LOAD_PARTIES_FULFILLED,
  USER_LOAD_PARTIES_PENDING,
  USER_LOAD_PARTIES_REJECTED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  parties: [],
}

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PARTIES_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_PARTIES_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case LOAD_PARTIES_FULFILLED: {
      return {
        ...state,
        loading: false,
        parties: payload.data,
      }
    }

    case USER_LOAD_PARTIES_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case USER_LOAD_PARTIES_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case USER_LOAD_PARTIES_FULFILLED: {
      return {
        ...state,
        loading: false,
        parties: payload.data,
      }
    }

    default: {
      return state
    }
  }
}

export default listReducer
