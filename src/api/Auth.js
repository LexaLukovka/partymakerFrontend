import JWT from 'jwt-decode'
import Http from 'src/services/Http'

class Auth {
  static async authentication(path, credentials) {
    const { token, refreshToken } = await Http.post(path, credentials)
    const user = JWT(token).data

    return { token, refreshToken, ...user }
  }

  register(credentials) {
    return Auth.authentication('/auth/register', credentials)
  }

  login(credentials) {
    return Auth.authentication('/auth/login', credentials)
  }

  google(Guser) {
    return Auth.authentication('/auth/social', Guser)
  }

  facebook(FBuser) {
    return Auth.authentication('/auth/social', FBuser)
  }

  async activate(hash) {
    const data = await Http.get(`/auth/activate/${hash}`)

    return data
  }
}

export default new Auth()
