import { SHOW_ACTION_BUTTON, HIDE_ACTION_BUTTON } from './action'

const initialState = {
  isVisible: false,
  to: '/parties/create',
}

const actionButtonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ACTION_BUTTON:
      return {
        ...state,
        isVisible: true,
        to: payload || initialState.to,
      }

    case HIDE_ACTION_BUTTON:
      return {
        ...state,
        isVisible: false,
        to: initialState.to,
      }

    default:
      return state
  }
}

export default actionButtonReducer
