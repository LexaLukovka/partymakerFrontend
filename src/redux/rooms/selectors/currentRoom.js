import { createSelector } from 'reselect/lib/index'
import assembleMessages from 'src/redux/messages/selectors/assembleMessages'
import assembleUsers from 'src/redux/users/selectors/assembleUsers'

const currentRoom = (rooms, messages, users, places, room_id, totalMessages) => {

  const room = rooms[room_id]

  if (!room) return null

  console.log(messages)

  return {
    ...room,
    messages: messages.filter(m => m.room_id === room.id),
    guests: users.filter(u => u.room_id === room.id),
    place: places[room.place_id],
    totalMessages,
  }
}

export default createSelector(
  state => state.rooms.entities,
  state => assembleMessages(state),
  state => assembleUsers(state),
  state => state.places.entities,
  state => state.rooms.status.room_id,
  state => state.rooms.status.messages.total,
  currentRoom,
)
