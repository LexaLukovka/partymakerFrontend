import {
  SET_ROOM,
  SET_ROOMS,
  REMOVE_ROOM,
  SET_ROOM_GUESTS,
  SET_ROOM_GUEST,
  SET_ROOM_MESSAGES,
  SET_ROOM_MESSAGE,
  SET_ROOM_INVITE,
  SET_ROOM_PLACE
} from '../action'
import uniq from 'lodash/uniq'
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

      if (!room) break

      return {
        ...state,
        [room.id]: {
          ...room,
          guests_ids: uniq([...room.guests_ids, ...payload])
        },
      }
    }

    case SET_ROOM_GUEST: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          guests_ids: uniq([...room.guests_ids, payload])
        },
      }
    }

    case SET_ROOM_MESSAGES: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          messages_ids: uniq([...room.messages_ids, ...payload])
        },
      }
    }

    case SET_ROOM_MESSAGE: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          messages_ids: uniq([...room.messages_ids, payload])
        },
      }
    }

    case SET_ROOM_INVITE: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          invite_id: payload,
        }
      }
    }

    case SET_ROOM_PLACE: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          place_id: payload,
        }
      }
    }

    default:
      return state
  }
}
