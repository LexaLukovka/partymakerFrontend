/* eslint-disable class-methods-use-this */
import Http from '../Http'

class Settings {
  change(settings) {
    return Http.put('/settings', settings)
  }
}

export default new Settings()
