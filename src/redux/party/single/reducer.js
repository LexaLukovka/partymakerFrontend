import {
  LOAD_PARTY_PENDING,
  LOAD_PARTY_REJECTED,
  LOAD_PARTY_FULFILLED,

  CHANGE_PARTY_PENDING,
  CHANGE_PARTY_REJECTED,
  CHANGE_PARTY_FULFILLED,

  ADD_PARTY_PICTURE_PENDING,
  ADD_PARTY_PICTURE_REJECTED,
  ADD_PARTY_PICTURE_FULFILLED,

  DELETE_PARTY_PICTURE_PENDING,
  DELETE_PARTY_PICTURE_REJECTED,
  DELETE_PARTY_PICTURE_FULFILLED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  message: null,
  party: {},
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

    case CHANGE_PARTY_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case CHANGE_PARTY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case CHANGE_PARTY_FULFILLED: {
      return {
        ...state,
        loading: false,
        party: payload.data,
      }
    }

    case ADD_PARTY_PICTURE_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADD_PARTY_PICTURE_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case ADD_PARTY_PICTURE_FULFILLED: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }

    case DELETE_PARTY_PICTURE_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_PARTY_PICTURE_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case DELETE_PARTY_PICTURE_FULFILLED: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }

    default: {
      return state
    }
  }
}

export default singleReducer
