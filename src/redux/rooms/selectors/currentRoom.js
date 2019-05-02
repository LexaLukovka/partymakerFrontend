import { createSelector } from 'reselect'
import assembleMessages from 'src/redux/messages/selectors/assembleMessages'

const currentRoom = (rooms, messages, users, places, room_id, totalMessages, invites) => {

  const room = rooms[room_id]

  if (!room) return null

  return {
    ...room,
    messages: messages.filter(m => m.room_id === room.id),
    guests: room.guests_ids.map(id => users[id]),
    place: places.find(place => place.room_id === room.id),
    invite: invites.find(invite => invite.room_id === room.id),
    totalMessages,
  }
}

export default createSelector(
  state => state.rooms.entities,
  state => assembleMessages(state),
  state => state.users.entities,
  state => Object.values(state.places.entities),
  state => state.rooms.status.room_id,
  state => state.rooms.status.messages.total,
  state => Object.values(state.invites.entities),
  currentRoom,
)
