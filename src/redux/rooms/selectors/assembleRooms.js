import { createSelector } from 'reselect'

const assembleRooms = (rooms, places, invites) => {
  return rooms.map(room => ({
    ...room,
    place: places[room.place_id],
    invite: invites.find(invite => invite.room_id === room.id)
  }))
}

export default createSelector(
  state => Object.values(state.rooms.entities),
  state => state.places.entities,
  state => Object.values(state.invites.entities),
  assembleRooms,
)
