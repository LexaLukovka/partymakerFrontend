import {
  LOAD_GROUPS_FULFILLED,
  LOAD_GROUPS_PENDING,
  LOAD_GROUPS_REJECTED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  group: [],
}

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GROUPS_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_GROUPS_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case LOAD_GROUPS_FULFILLED: {
      return {
        ...state,
        loading: false,
        group: payload.data,
      }
    }

    default: {
      return state
    }
  }
}

export default listReducer
