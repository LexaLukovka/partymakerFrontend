import {
  OPEN_DELETE,
  CLOSE_DELETE,

  DELETE_GROUP_PENDING,
  DELETE_GROUPS_FULFILLED,
  DELETE_GROUPS_REJECTED,
} from './action'

const initialState = {
  isOpen: false,
  loading: false,
  error: null,
  message: null,
}

const deleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_DELETE: {
      return {
        ...state,
        isOpen: true,
      }
    }
    case CLOSE_DELETE: {
      return {
        ...state,
        isOpen: false,
      }
    }

    case DELETE_GROUP_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_GROUPS_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case DELETE_GROUPS_FULFILLED: {
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
