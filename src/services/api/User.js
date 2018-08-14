/* eslint-disable class-methods-use-this */
import Http from 'src/services/Http'

class User {
  find(id) {
    return Http.get(`/user/${id}`)
  }

  parties(user_id) {
    return Http.get(`/user/${user_id}/parties`)
  }
}

export default new User()
