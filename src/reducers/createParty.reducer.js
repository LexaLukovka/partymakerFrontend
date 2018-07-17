import {
  PARTY_CARD_ICON,
  OPEN_PARTY_CARD_FORM,
} from '../actions/createParty.action'

const initialState = {
  errors: null,
  checkedOpenForm: false,
  success: false,
  checkClick: null,
  typeParty: null,
}

const createParty = (state = initialState, { type, payload }) => {
  switch (type) {
    case PARTY_CARD_ICON: {
      return {
        ...state,
        typeParty: payload,
        checkClick: state.checkClick !== payload ? payload : null,
      }
    }

    case OPEN_PARTY_CARD_FORM: {
      return {
        ...state,
        checkedOpenForm: payload,
      }
    }

    default:
      return state
  }
}

export default createParty
