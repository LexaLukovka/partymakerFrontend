import {
  PARTY_CARD_ICON_CHECK,
  PARTY_CARD_ICON,
  PARTY_CARD_FORM,
  PARTY_CARD_FINISH,
  PARTY_PRIVATE_CHECK,
  CREATE_PARTY_REJECTED,
  CREATE_PARTY_FULFILLED,
} from './action'

import partyTypes from '../../../mock/partyTypes.json'

const initialState = {
  partyTypes,
  errors: null,
  checkedPrivate: true,
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

    case PARTY_PRIVATE_CHECK: {
      return {
        ...state,
        checkedPrivate: !payload,
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
