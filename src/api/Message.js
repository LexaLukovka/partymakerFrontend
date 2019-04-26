import Http from 'src/services/Http'

const Message = {

  list(room_id) {
    return Http.get(`/rooms/${room_id}/messages`)
  },

  create(room_id, form) {
    return Http.post(`/rooms/${room_id}/messages`, form)
  },

  update(room_id, id, form) {
    return Http.put(`/rooms/${room_id}/messages/${id}`, form)
  },

  destroy(room_id, id) {
    return Http.delete(`/rooms/${room_id}/messages/${id}`)
  },
}

export default Message
