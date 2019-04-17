import { ACTIVATE_USER, ADD_USER } from './action'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload,
      }

    case ACTIVATE_USER:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          is_active: true,
        },
      }

    default:
      return state
  }
}

export default usersReducer
