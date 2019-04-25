import Http from 'src/services/Http'
import qs from 'querystring'

class User {

  list() {
    return Http.get('/rooms')
  }

  find(id) {
    return Http.get(`/rooms/${id}`)
  }

  create(form) {
    return Http.post('/rooms', form)
  }

  update(id, form) {
    return Http.put(`/rooms/${id}`, form)
  }

  destroy(id) {
    return Http.delete(`/rooms/${id}`)
  }

  guests(id) {
    return Http.get(`/rooms/${id}/guests`)
  }

  messages(id, params) {

    const defaultParams = {
      page: params?.page || 1,
      limit: params?.limit || 20
    }

    return Http.get(`/rooms/${id}/messages?${qs.stringify(defaultParams)}`)
  }
}

export default new User()
