import { createSelector } from 'reselect/lib/index'
import assembleMessages from 'src/redux/messages/selectors/assembleMessages'

const currentRoom = (rooms, messagesArray, users, places, room_id) => {

  const room = rooms[room_id]

  if (!room) return null

  return {
    ...room,
    messages: messagesArray.filter(m => m.room_id === room.id),
    guests: room.guests_ids.map(id => users[id]),
    place: places[room.place_id]
  }
}

export default createSelector(
  state => state.rooms.entities,
  state => assembleMessages(state),
  state => state.users.entities,
  state => state.places.entities,
  state => state.rooms.status.room_id,
  currentRoom,
)
