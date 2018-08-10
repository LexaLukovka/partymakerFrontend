import Auth from 'services/api/Auth'
import * as alert from 'src/redux/alert/action'
import store from 'src/store'

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
  payload: Auth.register(form),
})

export const login = (form) => async dispatch => {
  await dispatch({
    type: LOGIN_USER,
    payload: Auth.login(form),
  })

  const { error } = store.getState().authReducer

  dispatch(alert.show(error || 'Вы вошли'))
}

// noinspection JSUnusedGlobalSymbols
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  })

  dispatch(alert.show('Logged out'))
}
