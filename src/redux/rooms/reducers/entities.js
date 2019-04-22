import {
  SET_ROOM,
  SET_ROOMS,
  REMOVE_ROOM,
  SET_ROOM_GUESTS,
  SET_ROOM_GUEST,
  SET_ROOM_MESSAGES,
  SET_ROOM_MESSAGE
} from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload, meta }) => {
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

    case SET_ROOM_GUESTS: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          guests_ids: [...room.guests_ids, ...payload]
        },
      }
    }

    case SET_ROOM_GUEST: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          guests_ids: [...room.guests_ids, payload]
        },
      }
    }

    case SET_ROOM_MESSAGES: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          messages_ids: [...room.messages_ids, ...payload]
        },
      }
    }

    case SET_ROOM_MESSAGE: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          messages_ids: [...room.messages_ids, payload]
        },
      }
    }

    default:
      return state
  }
}
