/* eslint-disable class-methods-use-this */
import JWT from 'jwt-decode'
import Http from '../Http'
import Token from '../Token'
import Cache from '../Cache'

class User {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/register', credentials)
    Token.remember(token, refreshToken)

    const user = JWT(token).data
    this.save(user)

    return user
  }

  async login(credentials) {
    if (!Cache.has('user') || !Cache.has('token')) {
      const { token, refreshToken } = await Http.post('/login', credentials)
      Token.remember(token, refreshToken)

      const user = JWT(token).data
      this.save(user)
    }

    return User.getSaved()
  }

  static getSaved() {
    return Cache.get('user')
  }

  getSaved() {
    return Cache.get('user')
  }

  save(user) {
    Cache.put('user', user)
  }

  logout() {
    Cache.remove('user')
    Token.clear()
  }
}

export default new User()
