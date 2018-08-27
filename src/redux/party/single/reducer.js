import {
  LOAD_PARTY_PENDING,
  LOAD_PARTY_REJECTED,
  LOAD_PARTY_FULFILLED,

  CHANGE_PARTY_PENDING,
  CHANGE_PARTY_REJECTED,
  CHANGE_PARTY_FULFILLED,

} from './action'

const initialState = {
  loading: false,
  error: null,
  message: null,
  party: {},
}

const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PARTY_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_PARTY_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case LOAD_PARTY_FULFILLED:
      return {
        ...state,
        loading: false,
        party: payload.data || {},
      }

    case CHANGE_PARTY_PENDING:
      return {
        ...state,
        loading: true,
      }

    case CHANGE_PARTY_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case CHANGE_PARTY_FULFILLED:
      return {
        ...state,
        loading: false,
        message: payload.message,
      }

    default: {
      return state
    }
  }
}

export default singleReducer
