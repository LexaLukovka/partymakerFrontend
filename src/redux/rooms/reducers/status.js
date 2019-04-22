import { SET_CURRENT_ROOM } from '../action'

const initialState = {
  room_id: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_ROOM:
      return {
        ...state,
        room_id: payload,
      }

    default:
      return state
  }
}
