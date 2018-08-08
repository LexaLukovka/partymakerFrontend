/* eslint-disable class-methods-use-this */
import Http from '../Http'
import JWT from 'jwt-decode'

class Settings {
  async change(settings) {
    const { token, refreshToken } = await Http.put('/settings', settings)
    const user = JWT(token).data

    return { token: `Bearer ${token.replace(/^"(.*)"$/, '$1')}`, refreshToken, ...user }
  }
}

export default new Settings()
