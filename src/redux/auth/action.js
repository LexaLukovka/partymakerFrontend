export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGOUT_USER = 'LOGIN_USER'

const register = form => ({
  type: REGISTER_USER,
  payload: form,
})

const registerError = user => ({
  type: REGISTER_USER_REJECTED,
  payload: user,
})

const registerSuccess = user => ({
  type: REGISTER_USER_FULFILLED,
  payload: user,
})

const logout = () => ({
  type: LOGOUT_USER,
})

export default {
  register,
  registerSuccess,
  registerError,

  logout,
}
