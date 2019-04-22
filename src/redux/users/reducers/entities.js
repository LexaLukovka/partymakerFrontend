import { SET_USER } from '../action'
import Auth from 'services/Auth'

const user = Auth.user()

const initialState = user ? { [user.id]: user } : {}

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        [payload.id]: payload,
      }

    default:
      return state
  }
}

export default usersReducer
