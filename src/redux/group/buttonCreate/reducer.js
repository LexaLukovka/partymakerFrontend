import { HIDE_CHOOSE, HIDE_CREATE_GROUP } from './action'

const initialState = {
  isChoose: false,
}

const buttonReducer = (state = initialState, { type }) => {
  switch (type) {
    case HIDE_CREATE_GROUP: {
      return {
        ...state,
        isChoose: true,
      }
    }
    case HIDE_CHOOSE: {
      return {
        ...state,
        isChoose: false,
      }
    }
    default: {
      return state
    }
  }
}

export default buttonReducer
