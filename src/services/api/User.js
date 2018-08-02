/* eslint-disable class-methods-use-this */
import JWT from 'jwt-decode'
import Http from 'src/services/Http'

class User {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/register', credentials)
    const user = JWT(token).data

    return { token: `Bearer ${token.replace(/^"(.*)"$/, '$1')}`, refreshToken, ...user }
  }

  async login(credentials) {
    const { token, refreshToken } = await Http.post('/login', credentials)
    const user = JWT(token).data

    return { token: `Bearer ${token.replace(/^"(.*)"$/, '$1')}`, refreshToken, ...user }
  }
}

export default new User()
