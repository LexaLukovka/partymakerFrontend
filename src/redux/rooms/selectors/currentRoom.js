import { createSelector } from 'reselect/lib/index'

const currentRoom = (rooms, messages, users, places, room_id) => {

  const room = rooms[room_id]

  if (!room) return null

  return {
    ...room,
    messages: room.messages_ids.map(id => messages[id]),
    guests: room.guests_ids.map(id => users[id]),
    place: places[room.place_id]
  }
}

export default createSelector(
  state => state.rooms.entities,
  state => state.messages.entities,
  state => state.users.entities,
  state => state.places.entities,
  state => state.rooms.status.room_id,
  currentRoom,
)
