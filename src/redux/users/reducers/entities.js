import { SET_USER, SET_USERS } from '../action'
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

    default:
      return state
  }
}

export default usersReducer
