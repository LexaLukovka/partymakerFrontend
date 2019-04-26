import Http from 'src/services/Http'

const Place = {

  list() {
    return Http.get('/places')
  },

  find(id) {
    return Http.get(`/places/${id}`)
  },

  create(form) {
    return Http.post('/places', form)
  },

  update(id, form) {
    return Http.put(`/places/${id}`, form)
  },

  destroy(id) {
    return Http.delete(`/places/${id}`)
  },
}

export default Place
