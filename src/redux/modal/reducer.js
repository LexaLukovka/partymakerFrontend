import { SHOW_MODAL, CLOSE_MODAL } from './action'

const initialState = {
  isOpen: false,
  picture: '',
}

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return { ...state, isOpen: true, picture: payload.picture }

    case CLOSE_MODAL:
      return { ...state, isOpen: false }

    default:
      return state
  }
}

export default modalReducer
