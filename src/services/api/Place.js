/* eslint-disable class-methods-use-this */
import Http from 'services/Http'
import qs from 'querystring'

class Place {
  all(searchParams) {
    return Http.get(`/places?${qs.stringify(searchParams)}`)
  }

  find(id) {
    return Http.get(`/places/${id}`)
  }
}

export default new Place()
