import Http from 'src/services/Http'

class Asset {

  list() {
    return Http.get('/assets')
  }

  find(id) {
    return Http.get(`/assets/${id}`)
  }

  create(file) {
    const form = new FormData()
    form.append('file', file)

    return Http.post('/assets', form)
  }

  update(id, form) {
    return Http.put(`/assets/${id}`, form)
  }

  destroy(id) {
    return Http.delete(`/assets/${id}`)
  }
}

export default new Asset()