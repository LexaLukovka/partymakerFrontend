import JWT from 'jwt-decode'
import Http from 'src/api/Http'

class Auth {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/auth/register', credentials)
    const user = JWT(token).data

    return { token, refreshToken, ...user }
  }

  async login(credentials) {
    const { token, refreshToken } = await Http.post('/auth/login', credentials)
    const user = JWT(token).data

    return { token, refreshToken, ...user }
  }
}

export default new Auth()
