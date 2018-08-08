import {
  CHANGE_SETTINGS_PENDING,
  CHANGE_SETTINGS_REJECTED,
  CHANGE_SETTINGS_FULFILLED,
} from './action'

const initialState = {
  loading: false,
  error: null,
  settings: null,
}

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SETTINGS_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case CHANGE_SETTINGS_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }
    case CHANGE_SETTINGS_FULFILLED: {
      return {
        ...state,
        loading: false,
        settings: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default settingsReducer
