import {
  SET_HEADER_ICON,
  SET_HEADER_TITLE,
  RESET_HEADER_TITLE,
} from './action'

const initialState = {
  title: 'Partymaker',
  icon: 'menu',
}

const headerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HEADER_ICON:
      return {
        ...state,
        icon: payload,
      }

    case SET_HEADER_TITLE:
      return {
        ...state,
        title: payload,
      }

    case RESET_HEADER_TITLE:
      return {
        ...state,
        title: initialState.title,
      }

    default:
      return state
  }
}

export default headerReducer
