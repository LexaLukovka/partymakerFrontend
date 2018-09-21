import { SHOW_ACTION_BUTTON, HIDE_ACTION_BUTTON } from './action'

const initialState = {
  isOpen: false,
  to: '/group/create',
}

const actionButtonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ACTION_BUTTON:
      return {
        ...state,
        isOpen: true,
        to: payload || initialState.to,
      }

    case HIDE_ACTION_BUTTON:
      return {
        ...state,
        isOpen: false,
        to: initialState.to,
      }

    default:
      return state
  }
}

export default actionButtonReducer
