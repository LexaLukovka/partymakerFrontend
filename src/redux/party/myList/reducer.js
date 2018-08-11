import {
  USER_LOAD_PARTIES_FULFILLED,
  USER_LOAD_PARTIES_PENDING,
  USER_LOAD_PARTIES_REJECTED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  parties: [],
}

const myListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

export default myListReducer
