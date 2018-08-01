import { SHOW_PARTY_PENDING, SHOW_PARTY_FULFILLED, SHOW_PARTY_REJECTED } from './action'

const initialState = {
  loading: false,
  party: {},
  error: null,
}

const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_PARTY_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case SHOW_PARTY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case SHOW_PARTY_FULFILLED: {
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
