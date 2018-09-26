import uid from 'uid'
import { HOST_URL } from 'services/constants'
import {
  CREATE_GROUP_PENDING,
  CREATE_GROUP_REJECTED,
  CREATE_GROUP_FULFILLED,

  UPDATE_GROUP_FORM,
  RESET_GROUP_FORM,
  RESET_GROUP_PLACE_FORM,
  RESET_GROUP_EVENT_FORM,
} from './action'

const initialState = {
  error: null,
  success: false,
  form: {
    place: {},
    private: false,
    pictures: [],
    invite_url: `${HOST_URL}/${uid(10)}/invite`,
  },
}

const createGroup = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_GROUP_FORM:
      return {
        ...state,
        form: { ...state.form, ...payload },
      }

    case CREATE_GROUP_PENDING:
      return { ...state, loading: true }

    case CREATE_GROUP_FULFILLED:
      return {
        ...state,
        success: true,
        loading: false,
        form: initialState.form,
      }

    case CREATE_GROUP_REJECTED:
      return { ...state, error: payload }

    case RESET_GROUP_FORM:
      return {
        ...state,
        error: null,
        success: false,
        loading: false,
        form: initialState.form,
      }

    case RESET_GROUP_PLACE_FORM: {
      return {
        ...state,
        form: {
          ...state.form,
          place: {},
        },
      }
    }
    case RESET_GROUP_EVENT_FORM: {
      return {
        ...state,
        form: {
          ...state.form,
          event: {},
        },
      }
    }

    default:
      return state
  }
}

export default createGroup
