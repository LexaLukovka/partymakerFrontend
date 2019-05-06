import { SET_USER, SET_USERS, SET_USER_ONLINE, SET_USER_OFFLINE } from '../action'
import Auth from 'services/Auth'
import arrayToObject from 'utils/arrayToObject'

const user = Auth.user()

const initialState = user ? { [user.id]: user } : {}

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_USER:
      return {
        ...state,
        [payload.id]: payload,
      }

    case SET_USERS:
      return {
        ...state,
        ...arrayToObject(payload),
      }

    case SET_USER_ONLINE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          is_online: true
        }
      }

    case SET_USER_OFFLINE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          is_online: false
        }
      }

    default:
      return state
  }
}

export default usersReducer
