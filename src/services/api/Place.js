/* eslint-disable class-methods-use-this */
import Http from 'services/Http'
import qs from 'querystring'

class Place {
  find(id) {
    return Http.get(`/places/${id}`)
  }

  all(searchParams) {
    return Http.get(`/places?${qs.stringify(searchParams)}`)
  }

  vote(id, rating) {
    return Http.post(`/places/${id}/votes`, { rating })
  }

  isUserVoted(id) {
    return Http.get(`/places/${id}/votes`)
  }
}

export default new Place()
