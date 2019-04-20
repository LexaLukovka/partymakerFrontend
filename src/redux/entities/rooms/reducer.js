import { SET_ROOM, SET_ROOMS, REMOVE_ROOM } from './action'
import arrayToObject from 'utils/arrayToObject'

const roomsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_ROOMS:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_ROOM:
      return {
        ...state,
        [payload.id]: payload,
      }

    case REMOVE_ROOM: {
      const rooms = { ...state }
      delete rooms[payload]

      return rooms
    }

    default:
      return state
  }
}

export default roomsReducer
