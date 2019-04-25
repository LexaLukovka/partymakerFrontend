import Auth from 'api/Auth'

export const ACTIVATE_USER = 'ACTIVATE_USER'
export const ACTIVATE_USER_FULFILLED = 'ACTIVATE_USER_FULFILLED'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'
export const FORGOT_PASSWORD_FULFILLED = 'FORGOT_PASSWORD_FULFILLED'

export const RESET_PASSWORD = 'RESET_PASSWORD'
export const RESET_PASSWORD_FULFILLED = 'RESET_PASSWORD_FULFILLED'

export const LOGIN_GOOGLE_USER = 'LOGIN_GOOGLE_USER'
export const LOGIN_GOOGLE_USER_FULFILLED = 'LOGIN_GOOGLE_USER_FULFILLED'

export const LOGIN_FACEBOOK_USER = 'LOGIN_FACEBOOK_USER'
export const LOGIN_FACEBOOK_USER_FULFILLED = 'LOGIN_FACEBOOK_USER_FULFILLED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

export const LOGOUT_USER = 'LOGOUT_USER'

export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SET_AUTH_EMAIL = 'SET_AUTH_EMAIL'

/**
 * Async actions. Making API requests
 */

const register = form => ({
  type: REGISTER_USER,
  payload: Auth.register(form),
})

const login = form => ({
  type: LOGIN_USER,
  payload: Auth.login(form),
})

const activate = hash => ({
  type: ACTIVATE_USER,
  payload: Auth.activate(hash),
})

const forgotPassword = form => ({
  type: FORGOT_PASSWORD,
  payload: Auth.forgotPassword(form),
  meta: form,
})

const resetPassword = form => ({
  type: RESET_PASSWORD,
  payload: Auth.resetPassword(form),
})

const google = Guser => ({
  type: LOGIN_GOOGLE_USER,
  payload: Auth.google(Guser),
})

const facebook = FBUser => ({
  type: LOGIN_FACEBOOK_USER,
  payload: Auth.facebook(FBUser),
})

const logout = () => ({
  type: LOGOUT_USER,
  payload: Auth.logout()
})

/**
 * Sync actions. Updating store
 */

const setCurrentUser = (user) => ({
  type: SET_AUTH_USER,
  payload: user,
})

const setEmail = (email) => ({
  type: SET_AUTH_EMAIL,
  payload: email,
})

export default {
  register,
  login,
  activate,
  google,
  facebook,
  forgotPassword,
  resetPassword,
  setCurrentUser,
  setEmail,
  logout,
}
