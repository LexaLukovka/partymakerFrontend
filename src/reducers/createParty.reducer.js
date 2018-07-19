import {
  PARTY_CARD_ICON_CHECK,
  PARTY_CARD_ICON,
  PARTY_CARD_FORM,
  PARTY_CARD_FINISH,
  CREATE_PARTY_REJECTED,
  CREATE_PARTY_FULFILLED,
} from '../actions/createParty.action'

const initialState = {
  errors: null,
  checkedOpenForm: false,
  success: false,
  checkClick: null,
  typeParty: null,
  form: null,
  finishForm: null,
}

const createParty = (state = initialState, { type, payload }) => {
  switch (type) {
    case PARTY_CARD_ICON_CHECK: {
      return {
        ...state,
        checkClick: state.checkClick !== payload ? payload : null,
      }
    }

    case PARTY_CARD_ICON: {
      return {
        ...state,
        typeParty: payload,
      }
    }

    case PARTY_CARD_FORM: {
      return {
        ...state,
        form: payload,
      }
    }

    case PARTY_CARD_FINISH: {
      return {
        ...state,
        finishForm: payload,
      }
    }

    case CREATE_PARTY_REJECTED: {
      return {
        ...state,
        errors: payload,
      }
    }
    case CREATE_PARTY_FULFILLED: {
      return {
        ...state,
        success: payload,
      }
    }

    default:
      return state
  }
}

export default createParty
