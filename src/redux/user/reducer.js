import {
  FIND_USER_PENDING,
  FIND_USER_REJECTED,
  FIND_USER_FULFILLED,
} from './action'

const initialState = {
  user: null,
  errors: [],
  error: false,
  loading: false,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIND_USER_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case FIND_USER_REJECTED: {
      return {
        ...state,
        error: true,
        errors: payload,
        loading: false,
      }
    }
    case FIND_USER_FULFILLED: {
      return {
        ...state,
        user: payload.user,
        loading: false,
      }
    }

    default: {
      return state
    }
  }
}

export default userReducer
