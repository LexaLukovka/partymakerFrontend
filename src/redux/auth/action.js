export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const LOGOUT_USER = 'LOGIN_USER'

const register = form => ({
  type: REGISTER_USER,
  payload: form,
})

const registerError = error => ({
  type: REGISTER_USER_REJECTED,
  payload: error,
})

const registerSuccess = user => ({
  type: REGISTER_USER_FULFILLED,
  payload: user,
})

const login = form => ({
  type: LOGIN_USER,
  payload: form,
})

const loginError = error => ({
  type: LOGIN_USER_REJECTED,
  payload: error,
})

const loginSuccess = user => ({
  type: LOGIN_USER_FULFILLED,
  payload: user,
})

const logout = () => ({
  type: LOGOUT_USER,
})

export default {
  register,
  registerError,
  registerSuccess,

  login,
  loginError,
  loginSuccess,

  logout,
}
