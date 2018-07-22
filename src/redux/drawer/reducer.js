import { OPEN_DRAWER, CLOSE_DRAWER } from './action'

const initialState = {
  isOpen: false,
}

const drawerReducer = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_DRAWER: {
      return {
        ...state,
        isOpen: true,
      }
    }
    case CLOSE_DRAWER: {
      return {
        ...state,
        isOpen: false,
      }
    }
    default: {
      return state
    }
  }
}

export default drawerReducer
