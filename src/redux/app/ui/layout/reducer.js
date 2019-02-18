import { SET_PAGE_BACKGROUND, REMOVE_PAGE_BACKGROUND } from './action'

const initialState = {
  background: null,
}

const layoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE_BACKGROUND:
      return {
        ...state,
        background: payload,
      }

    case REMOVE_PAGE_BACKGROUND:
      return {
        ...state,
        background: null,
      }

    default: {
      return state
    }
  }
}

export default layoutReducer
