import uid from 'uid'
import { HOST_URL } from 'services/constants'
import {
  CREATE_PARTY_PENDING,
  CREATE_PARTY_REJECTED,
  CREATE_PARTY_FULFILLED,
  UPDATE_PARTY_FORM,
  RESET_PARTY_FORM,
  RESET_PARTY_PLACE_FORM,
} from './action'

const initialState = {
  error: null,
  success: false,
  activeStep: 0,
  form: {
    place: {},
    private: false,
    pictures: [],
    invite_url: `${HOST_URL}/${uid(10)}/invite`,
  },
}

const createParty = (state = initialState, { type, payload, step }) => {
  switch (type) {
    case UPDATE_PARTY_FORM:
      return {
        ...state,
        form: { ...state.form, ...payload },
        activeStep: step,
      }

    case CREATE_PARTY_PENDING:
      return { ...state, loading: true }

    case CREATE_PARTY_FULFILLED:
      return {
        ...state,
        success: true,
        loading: false,
        form: initialState.form,
      }

    case CREATE_PARTY_REJECTED:
      return { ...state, error: payload }

    case RESET_PARTY_FORM:
      return {
        ...state,
        error: null,
        success: false,
        loading: false,
        form: initialState.form,
      }

    case RESET_PARTY_PLACE_FORM: {
      return {
        ...state,
        form: {
          ...state.form,
          place: {},
        },
      }
    }
    default:
      return state
  }
}

export default createParty
