import {
  ADD_USER,
} from './action'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload,
      }

    default:
      return state
  }
}

export default usersReducer
