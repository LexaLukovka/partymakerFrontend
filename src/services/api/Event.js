/* eslint-disable class-methods-use-this,camelcase,object-shorthand */
import Http from 'services/Http'
import qs from 'querystring'

class Event {
  all({ page, limit }) {
    return Http.get(`/events?${qs.stringify({ page, limit })}`)
  }

  find(event_id) {
    return Http.get(`/events/${event_id}`)
  }
}

export default new Event()
