import Http from 'src/services/Http'

const Auth = {

  register(credentials) {
    return Http.post('/auth/register', credentials)
  },

  login(credentials) {
    return Http.post('/auth/login', credentials)
  },

  google(Guser) {
    return Http.post('/auth/social', Guser)
  },

  facebook(FBuser) {
    return Http.post('/auth/social', FBuser)
  },

  activate(hash) {
    return Http.get(`/auth/activate/${hash}`)
  },

  forgotPassword(credentials) {
    return Http.post('/auth/password/forgot', credentials)
  },

  resetPassword(credentials) {
    const { password } = credentials

    return Http.post(`/auth/password/reset/${credentials.hash}`, {
      password,
      password_repeat: password
    })
  },

  logout() {
    return Http.post('/auth/logout')
  },
}

export default Auth
