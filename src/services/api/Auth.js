/* eslint-disable class-methods-use-this */
import JWT from 'jwt-decode'
import Http from 'src/services/Http'

class Auth {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/register', credentials)
    const user = JWT(token).data

    return { token, refreshToken, ...user }
  }

  async login(credentials) {
    const { token, refreshToken } = await Http.post('/login', credentials)
    const user = JWT(token).data

    return { token, refreshToken, ...user }
  }
}

export default new Auth()
