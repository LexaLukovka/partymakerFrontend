import { createSelector } from 'reselect'

const assembleRooms = (rooms, places) => {
  return rooms.map(room => ({
    ...room,
    place: places[room.place_id],
  }))
}

export default createSelector(
  state => Object.values(state.rooms.entities),
  state => state.places.entities,
  assembleRooms,
)
