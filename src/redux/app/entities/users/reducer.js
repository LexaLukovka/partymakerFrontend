import { ACTIVATE_USERS, ADD_USER } from './action'
import { LOGIN_USER_FULFILLED } from 'app/auth/action'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USER:
    case LOGIN_USER_FULFILLED:
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
