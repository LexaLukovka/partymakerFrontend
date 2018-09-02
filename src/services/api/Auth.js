/* eslint-disable class-methods-use-this */
import JWT from 'jwt-decode'
import qs from 'querystring'
import Http from 'src/services/Http'
import { BACKEND_URL } from 'services/constants'

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

  async facebook() {
    const params = {
      redirect_uri: `${BACKEND_URL}/authenticated/facebook`,
      scope: 'email',
      response_type: 'code',
      client_id: 2175525285996959,
    }
    const url = `https://graph.facebook.com/v2.1/oauth/authorize?${qs.stringify(params)}`

    const { token, refreshToken } = await Http.get(url)
    const user = JWT(token).data

    return { token, refreshToken, ...user }
  }
}

export default new Auth()
