import { SHOW_BACK, HIDE_BACK } from './action'

const initialState = {
  isBack: false,
}

const headerReducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_BACK: {
      return {
        ...state,
        isBack: true,
      }
    }
    case HIDE_BACK: {
      return {
        ...state,
        isBack: false,
      }
    }
    default: {
      return state
    }
  }
}

export default headerReducer
