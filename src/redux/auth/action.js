import Auth from 'services/api/Auth'

import * as alert from 'src/redux/alert/action'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const LOGIN_FACEBOOK_USER = 'LOGIN_FACEBOOK_USER'
export const LOGIN_FACEBOOK_USER_PENDING = 'LOGIN_FACEBOOK_USER_PENDING'
export const LOGIN_FACEBOOK_USER_FULFILLED = 'LOGIN_FACEBOOK_USER_FULFILLED'
export const LOGIN_FACEBOOK_USER_REJECTED = 'LOGIN_FACEBOOK_USER_REJECTED'

export const LOGIN_GOOGLE_USER = 'LOGIN_GOOGLE_USER'
export const LOGIN_GOOGLE_USER_PENDING = 'LOGIN_GOOGLE_USER_PENDING'
export const LOGIN_GOOGLE_USER_FULFILLED = 'LOGIN_GOOGLE_USER_FULFILLED'
export const LOGIN_GOOGLE_USER_REJECTED = 'LOGIN_GOOGLE_USER_REJECTED'
export const LOGOUT_USER = 'LOGIN_USER'

export const CHANGE_SETTINGS = 'CHANGE_SETTINGS'
export const CHANGE_SETTINGS_PENDING = 'CHANGE_SETTINGS_PENDING'
export const CHANGE_SETTINGS_REJECTED = 'CHANGE_SETTINGS_REJECTED'
export const CHANGE_SETTINGS_FULFILLED = 'CHANGE_SETTINGS_FULFILLED'

export const register = (form) => async dispatch => {
  await dispatch({
    type: REGISTER_USER,
    payload: Auth.register(form),
  })
  dispatch(alert.show('Вы вошли'))
}

// noinspection JSUnusedGlobalSymbols
export const facebook = (FBUser) => async dispatch => {
  await dispatch({
    type: LOGIN_FACEBOOK_USER,
    payload: Auth.facebook(FBUser),
  })

  dispatch(alert.show('Вы вошли'))
}

// noinspection JSUnusedGlobalSymbols
export const google = (Guser) => async dispatch => {
  await dispatch({
    type: LOGIN_GOOGLE_USER,
    payload: Auth.google(Guser),
  })

  dispatch(alert.show('Вы вошли'))
}

// noinspection JSUnusedGlobalSymbols
export const login = (form) => async dispatch => {
  await dispatch({
    type: LOGIN_USER,
    payload: Auth.login(form),
  })

  dispatch(alert.show('Вы вошли'))
}

// noinspection JSUnusedGlobalSymbols
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  })

  dispatch(alert.show('Вы вышли'))
}

// noinspection JSUnusedGlobalSymbols
export const change = (user_id, settings) => async dispatch => {
  await dispatch({
    type: CHANGE_SETTINGS,
    payload: Auth.change(user_id, settings),
  })
  dispatch(alert.show('Ваш профиль изменен'))
}
