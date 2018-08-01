import { LOAD_PARTY_PENDING, LOAD_PARTY_FULFILLED, LOAD_PARTY_REJECTED } from './action'

const initialState = {
  loading: false,
  party: {},
  error: null,
}

const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PARTY_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_PARTY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case LOAD_PARTY_FULFILLED: {
      return {
        ...state,
        loading: false,
        party: payload.data,
      }
    }

    default: {
      return state
    }
  }
}

export default singleReducer
