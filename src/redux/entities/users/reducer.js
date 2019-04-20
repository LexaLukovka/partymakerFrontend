import { ACTIVATE_USER, ADD_USER } from './action'
import Auth from 'services/Auth'

const user = Auth.user()

const initialState = user ? { [user.id]: user } : {}

const usersReducer = (state = initialState, { type, payload }) => {
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
