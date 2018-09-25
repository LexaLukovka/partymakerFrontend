import {
  LOGIN_USER_FULFILLED,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,

  LOGIN_FACEBOOK_USER_PENDING,
  LOGIN_FACEBOOK_USER_FULFILLED,
  LOGIN_FACEBOOK_USER_REJECTED,

  REGISTER_USER_PENDING,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,

  CHANGE_SETTINGS_FULFILLED,
  CHANGE_SETTINGS_PENDING,
  CHANGE_SETTINGS_REJECTED,

  LOGIN_GOOGLE_USER_PENDING,
  LOGIN_GOOGLE_USER_FULFILLED,
  LOGIN_GOOGLE_USER_REJECTED,
  LOGOUT_USER,
} from './action'

const initialState = {
  user: null,
  errors: [],
  error: false,
  loading: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SETTINGS_PENDING:
    case LOGIN_FACEBOOK_USER_PENDING:
    case LOGIN_GOOGLE_USER_PENDING:
    case REGISTER_USER_PENDING:
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
      }

    case CHANGE_SETTINGS_FULFILLED:
    case REGISTER_USER_FULFILLED:
    case LOGIN_GOOGLE_USER_FULFILLED:
    case LOGIN_FACEBOOK_USER_FULFILLED:
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        user: payload,
        loading: false,
      }
    case CHANGE_SETTINGS_REJECTED:
    case REGISTER_USER_REJECTED:
    case LOGIN_GOOGLE_USER_REJECTED:
    case LOGIN_FACEBOOK_USER_REJECTED:
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        error: true,
        errors: payload,
        loading: false,

      }

    case LOGOUT_USER:
      return { ...state, user: null }

    default:
      return state
  }
}

export default authReducer
