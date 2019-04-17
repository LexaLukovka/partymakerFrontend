import JWT from 'jwt-decode'
import Http from 'src/services/Http'

class Auth {
  async authenticate(path, credentials) {
    const { token, refreshToken } = await Http.post(path, credentials)
    const user = JWT(token).data

    return { token, refreshToken, ...user }
  }

  register(credentials) {
    return this.authenticate('/auth/register', credentials)
  }

  login(credentials) {
    return this.authenticate('/auth/login', credentials)
  }

  google(Guser) {
    return this.authenticate('/auth/social', Guser)
  }

  facebook(FBuser) {
    return this.authenticate('/auth/social', FBuser)
  }

  activate(hash) {
    return Http.get(`/auth/activate/${hash}`)
  }

  forgotPassword(credentials) {
    return Http.post('/auth/password/forgot', credentials)
  }

  setPassword(credentials) {
    return this.authenticate(`/auth/password/reset/${credentials.hash}`, credentials.form)
  }
}

export default new Auth()
