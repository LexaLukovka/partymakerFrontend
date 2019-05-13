import Http from 'services/Http'

const user = {

  load() {
    return Http.get(`/auth/user`)
  },

  update(form) {
    return Http.put(`/auth/user`, form)
  },
}

export default user
