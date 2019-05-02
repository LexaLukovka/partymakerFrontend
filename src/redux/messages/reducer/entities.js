import { SET_MESSAGE, SET_MESSAGES, REMOVE_MESSAGE } from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_MESSAGE:
      return {
        ...state,
        [payload.id]: {
          ...payload,
          room_id: Number(payload.room_id)
        },
      }

    case REMOVE_MESSAGE: {
      const messages = { ...state }
      delete messages[payload]

      return messages
    }

    default:
      return state
  }
}
