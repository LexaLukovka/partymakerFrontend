import {
  ACTIVATE_USER,
  ACTIVATE_USER_FULFILLED,
  ACTIVATE_USER_REJECTED,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FULFILLED,
  FORGOT_PASSWORD_REJECTED,
  LOGIN_FACEBOOK_USER,
  LOGIN_FACEBOOK_USER_FULFILLED,
  LOGIN_FACEBOOK_USER_REJECTED,
  LOGIN_GOOGLE_USER,
  LOGIN_GOOGLE_USER_FULFILLED,
  LOGIN_GOOGLE_USER_REJECTED,
  LOGIN_USER,
  LOGIN_USER_FULFILLED,
  LOGIN_USER_REJECTED,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,
  RESET_PASSWORD,
  RESET_PASSWORD_FULFILLED,
  RESET_PASSWORD_REJECTED,
} from './action'

const initialState = {
  errors: [],
  error: false,
  loading: false,
  user_id: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case ACTIVATE_USER:
    case RESET_PASSWORD:
    case FORGOT_PASSWORD:
    case LOGIN_GOOGLE_USER:
    case LOGIN_FACEBOOK_USER:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case LOGIN_USER_REJECTED:
    case REGISTER_USER_REJECTED:
    case ACTIVATE_USER_REJECTED:
    case FORGOT_PASSWORD_REJECTED:
    case RESET_PASSWORD_REJECTED:
    case LOGIN_GOOGLE_USER_REJECTED:
    case LOGIN_FACEBOOK_USER_REJECTED:
      return {
        ...state,
        error: true,
        errors: payload,
        loading: false,
      }

    case LOGIN_USER_FULFILLED:
    case REGISTER_USER_FULFILLED:
    case RESET_PASSWORD_FULFILLED:
    case LOGIN_GOOGLE_USER_FULFILLED:
    case LOGIN_FACEBOOK_USER_FULFILLED:
      return {
        ...state,
        user_id: payload.id,
        loading: false,
        error: false,
        errors: [],
      }

    case ACTIVATE_USER_FULFILLED:
    case FORGOT_PASSWORD_FULFILLED:
      return {
        ...state,
        loading: false,
        error: false,
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
