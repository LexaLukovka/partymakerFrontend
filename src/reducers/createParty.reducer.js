import { PARTY_CARD_ICON, PARTY_CARD_ICON_FULFILLED, PARTY_CARD_ICON_REJECTED } from '../actions/createParty.action'

const initialState = {
  errors: null,
  success: false,
  typeParty: null,
}

const createParty = (state = initialState, { type, payload }) => {
  switch (type) {
    case PARTY_CARD_ICON: {
      return {
        ...state,
        typeParty: payload,
      }
    }

    case PARTY_CARD_ICON_FULFILLED: {
      console.log(payload)
      return {
        ...state,
        typeParty: payload,
      }
    }

    case PARTY_CARD_ICON_REJECTED:
      return {
        ...state,
        errors: payload,
      }

    default:
      return state
  }
}

export default createParty
