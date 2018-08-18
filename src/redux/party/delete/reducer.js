import {
  DELETE_PARTIES_PENDING,
  DELETE_PARTIES_REJECTED,
  DELETE_PARTIES_FULFILLED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  message: null,
}

const deleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_PARTIES_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_PARTIES_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case DELETE_PARTIES_FULFILLED: {
      return {
        ...state,
        loading: false,
        message: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default deleteReducer
