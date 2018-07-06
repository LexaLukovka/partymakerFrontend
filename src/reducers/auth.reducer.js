import Cache from '../services/Cache'
import Token from '../services/Token'

import {
  LOGIN_USER_FULFILLED,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  REGISTER_USER_PENDING,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,
  LOAD_SAVED_USER, LOGOUT_USER,
} from '../actions/auth.action'

const initialState = {
  user: null,
  token: Token.get(),
  errors: [],
  error: false,
  loading: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOGIN_USER_FULFILLED: {
      return {
        ...state,
        user: payload,
        loading: false,
      }
    }
    case LOGIN_USER_REJECTED: {
      return {
        ...state,
        error: true,
        errors: payload,
        loading: false,

      }
    }

    case LOAD_SAVED_USER: {
      return {
        ...state,
        user: payload,
      }
    }

    case REGISTER_USER_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case REGISTER_USER_FULFILLED: {
      return {
        ...state,
        user: Cache.get('user'),
        loading: false,
      }
    }
    case REGISTER_USER_REJECTED: {
      return {
        ...state,
        error: payload,
        errors: payload,
        loading: false,

      }
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: null,
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
