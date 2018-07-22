import { SHOW_ALERT, HIDE_ALERT } from './action'

const initialState = {
  isVisible: false,
  message: 'default message',
}

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT: {
      return {
        ...state,
        isVisible: true,
        message: payload,
      }
    }

    case HIDE_ALERT: {
      return {
        ...state,
        isVisible: false,
      }
    }

    default: {
      return state
    }
  }
}

export default alertReducer
