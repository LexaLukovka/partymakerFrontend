/* eslint-disable class-methods-use-this */
import Http from 'services/Http'

class Place {
  all() {
    return Http.get('/places')
  }

  find(id) {
    return Http.get(`/places/${id}`)
  }
}

export default new Place()
