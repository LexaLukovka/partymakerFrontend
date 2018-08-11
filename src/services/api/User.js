/* eslint-disable class-methods-use-this */
import Http from 'src/services/Http'

class User {
  parties() {
    return Http.get('/user/parties')
  }
}

export default new User()
