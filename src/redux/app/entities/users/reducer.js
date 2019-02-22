import { ACTIVATE_USERS, ADD_USER } from './action'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload,
      }

    case ACTIVATE_USERS:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          active: true,
        },
      }

    default:
      return state
  }
}

export default usersReducer
