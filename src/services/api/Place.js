/* eslint-disable class-methods-use-this */
import Http from 'services/Http'
import qs from 'querystring'
import formatPlace from 'formatters/place'

class Place {
  async find(id) {
    const response = await Http.get(`/places/${id}`)
    return formatPlace(response)
  }

  async all(searchParams) {
    const response = await Http.get(`/places?${qs.stringify(searchParams)}`)
    response.data = response.data.map(place => formatPlace(place))
    return response
  }
}

export default new Place()
