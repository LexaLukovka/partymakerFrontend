import {
  DELETE_GROUP_PENDING,
  DELETE_GROUPS_REJECTED,
  DELETE_GROUPS_FULFILLED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  message: null,
}

const deleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
