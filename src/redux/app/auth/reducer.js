import {
  LOGIN_USER,
  LOGIN_USER_FULFILLED,
  LOGIN_USER_REJECTED,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,
} from './action'

const initialState = {
  errors: [],
  error: false,
  loading: false,
  user_id: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      }

    case REGISTER_USER_REJECTED:
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        error: true,
        errors: payload,
        loading: false,
      }

    case REGISTER_USER_FULFILLED:
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        user_id: payload.id,
        loading: false,
      }

    case LOGOUT_USER:
      return {
        ...state,
        user_id: null,
      }

    default:
      return state
  }
}

export default authReducer
