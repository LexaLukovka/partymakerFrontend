/* eslint-disable class-methods-use-this */
import Http from 'src/services/Http'

class User {
  find(id) {
    return Http.get(`/users/${id}`)
  }
}

export default new User()
