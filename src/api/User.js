import Http from 'src/services/Http'

class User {

  list() {
    return Http.get('/users')
  }

  find(id) {
    return Http.get(`/users/${id}`)
  }

  create(form) {
    return Http.post('/users', form)
  }

  update(id, form) {
    return Http.put(`/users/${id}`, form)
  }

  destroy(id) {
    return Http.delete(`/users/${id}`)
  }
}

export default new User()
