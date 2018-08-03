import {
  SHOW_BACK,
  HIDE_BACK,
  CREATE_PARTY,
  PARTIES_ID,
  CLOSE_SCENE,
} from './action'

const initialState = {
  isBack: false,
  isOpen: null,
}

const headerReducer = (state = initialState, { type, payload }) => {
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

    case CREATE_PARTY: {
      return {
        ...state,
        isOpen: 'Создание',
      }
    }
    case PARTIES_ID: {
      return {
        ...state,
        isOpen: payload,
      }
    }
    case CLOSE_SCENE: {
      return {
        ...state,
        isOpen: null,
      }
    }

    default: {
      return state
    }
  }
}

export default headerReducer
