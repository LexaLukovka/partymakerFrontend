import User from '../services/api/User'
import * as alert from './alert.action'
import store from '../store'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const LOGOUT_USER = 'LOGIN_USER'

export const LOAD_SAVED_USER = 'LOAD_SAVED_USER'

export const register = (form) => ({
  type: REGISTER_USER,
  payload: User.register(form),
})

export const login = (form) => async dispatch => {
  await dispatch({
    type: LOGIN_USER,
    payload: User.login(form),
  })

  const { error } = store.getState().authReducer

  dispatch(alert.show(error || 'Вы вошли'))
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
    payload: User.logout(),
  })

  dispatch(alert.show('Logged out'))
}

export const getSavedUser = () => async dispatch => {
  await dispatch({
    type: LOAD_SAVED_USER,
    payload: User.getSaved(),
  })

  if (User.getSaved()) {
    dispatch(alert.show('Logged in'))
  }
}
