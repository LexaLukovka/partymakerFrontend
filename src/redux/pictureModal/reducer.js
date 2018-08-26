import { SHOW_PICTURE_MODAL, HIDE_PICTURE_MODAL } from './action'

const initialState = {
  isOpen: false,
  picture_url: '',
}

const pictureModalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_PICTURE_MODAL:
      return { ...state, isOpen: true, picture_url: payload }

    case HIDE_PICTURE_MODAL:
      return { ...state, isOpen: false }

    default:
      return state
  }
}

export default pictureModalReducer
