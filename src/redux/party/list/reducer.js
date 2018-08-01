import { OUTPUT_PARTY_FULFILLED, OUTPUT_PARTY_PENDING, OUTPUT_PARTY_REJECTED } from './action'

const initialState = {
  loading: false,
  error: null,
  parties: [],
}

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OUTPUT_PARTY_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case OUTPUT_PARTY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case OUTPUT_PARTY_FULFILLED: {
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
