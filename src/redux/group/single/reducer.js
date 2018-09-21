import {
  CHANGE_GROUP_FULFILLED,
  CHANGE_GROUP_PENDING,
  CHANGE_GROUP_REJECTED,
  LOAD_GROUP_FULFILLED,
  LOAD_GROUP_PENDING,
  LOAD_GROUP_REJECTED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  message: null,
  group: {},
}

const singleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GROUP_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_GROUP_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case LOAD_GROUP_FULFILLED:
      return {
        ...state,
        loading: false,
        group: payload.data || {},
      }

    case CHANGE_GROUP_PENDING:
      return {
        ...state,
        loading: true,
      }

    case CHANGE_GROUP_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case CHANGE_GROUP_FULFILLED:
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
