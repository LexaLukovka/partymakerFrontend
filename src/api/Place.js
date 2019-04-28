import Http from 'src/services/Http'

const Place = {
  load(room_id) {
    return Http.get(`/rooms/${room_id}/place`)
  },

  create(room_id, form) {
    return Http.post(`/rooms/${room_id}/place`, form)
  },

  update(room_id, form) {
    return Http.put(`/rooms/${room_id}/place`, form)
  },

  destroy(room_id) {
    return Http.delete(`room/${room_id}/place`)
  },
}

export default Place
