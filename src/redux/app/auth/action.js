export const ACTIVATE_USER = 'ACTIVATE_USER'
export const ACTIVATE_USER_FULFILLED = 'ACTIVATE_USER_FULFILLED'
export const ACTIVATE_USER_REJECTED = 'ACTIVATE_USER_REJECTED'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGIN_GOOGLE_USER = 'LOGIN_GOOGLE_USER'
export const LOGIN_GOOGLE_USER_FULFILLED = 'LOGIN_GOOGLE_USER_FULFILLED'
export const LOGIN_GOOGLE_USER_REJECTED = 'LOGIN_GOOGLE_USER_REJECTED'

export const LOGIN_FACEBOOK_USER = 'LOGIN_FACEBOOK_USER'
export const LOGIN_FACEBOOK_USER_FULFILLED = 'LOGIN_FACEBOOK_USER_FULFILLED'
export const LOGIN_FACEBOOK_USER_REJECTED = 'LOGIN_FACEBOOK_USER_REJECTED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const LOGOUT_USER = 'LOGOUT_USER'

const register = form => ({
  type: REGISTER_USER,
  payload: form,
})

const login = form => ({
  type: LOGIN_USER,
  payload: form,
})

const activate = hash => ({
  type: ACTIVATE_USER,
  payload: hash,
})

const google = Guser => ({
  type: LOGIN_GOOGLE_USER,
  payload: Guser,
})

const facebook = FBUser => ({
  type: LOGIN_FACEBOOK_USER,
  payload: FBUser,
})

const logout = () => ({
  type: LOGOUT_USER,
})

export default {
  register,
  login,
  activate,
  google,
  facebook,
  logout,
}
