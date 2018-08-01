import {
  CREATE_PARTY_PENDING,
  CREATE_PARTY_REJECTED,
  CREATE_PARTY_FULFILLED,
  UPDATE_PARTY_FORM,
} from './action'

const initialState = {
  errors: null,
  success: false,
  activeStep: 0,
  form: {},
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
      return { ...state, success: payload }

    case CREATE_PARTY_REJECTED:
      return { ...state, errors: payload }

    default:
      return state
  }
}

export default createParty
