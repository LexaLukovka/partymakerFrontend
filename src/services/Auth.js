/* eslint-disable class-methods-use-this,no-plusplus,no-console */
import JWT from 'jwt-decode'
import Cookie from 'services/Cookie'

class Auth {

  token = Cookie.get('token')

  user(token) {

    if (token) this.save(token)

    return JWT(token || this.token).data
  }

  save(token) {
    this.token = token
  }

  logout() {
    Cookie.clear()
  }
}

const auth = new Auth()

export default auth
