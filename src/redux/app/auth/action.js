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

const login = form => ({
  type: LOGIN_USER,
  payload: form,
})

const logout = () => ({
  type: LOGOUT_USER,
})

export default {
  register,
  login,
  logout,
}
