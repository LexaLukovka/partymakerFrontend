/* eslint-disable class-methods-use-this */
import JWT from 'jwt-decode'
import Http from 'src/services/Http'
import Cache from 'src/services/Cache'
import Token from 'src/services/Token'

class User {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/register', credentials)

    Token.remember(token, refreshToken)

    const user = JWT(token).data

    this.remember({ ...user, token: Token.get(), refreshToken })

    return this.getSaved()
  }

  async login(credentials) {
    if (!Cache.has('user') || !Cache.has('token')) {
      const { token, refreshToken } = await Http.post('/login', credentials)
      Token.remember(token, refreshToken)
      const user = JWT(token).data
      this.remember({ ...user, token: Token.get(), refreshToken })
    }

    return this.getSaved()
  }

  getSaved() {
    return Cache.get('user')
  }

  remember(user) {
    Cache.put('user', user)
  }

  logout() {
    Cache.remove('user')
  }
}

export default new User()
