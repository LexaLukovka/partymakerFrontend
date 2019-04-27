import Http from 'src/services/Http'

class Invite {

  fromToken(token) {
    return Http.get(`/invite/${token}`)
  }

  accept(user_id, token) {
    return Http.post(`/invite/${token}`, { user_id })
  }

  find(room_id) {
    return Http.get(`rooms/${room_id}/invite`)
  }

  create(room_id, form) {
    return Http.post(`/rooms/${room_id}/invite`, form)
  }

  update(room_id, form) {
    return Http.put(`/rooms/${room_id}/invite`, form)
  }

  destroy(room_id) {
    return Http.delete(`/rooms/${room_id}/invite`)
  }
}

export default new Invite()
