import { SHOW_PARTY_FULFILLED, OUTPUT_PARTY_FULFILLED } from './action'

const initialState = {
  parties: null,
  partyId: null,
}

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OUTPUT_PARTY_FULFILLED: {
      return {
        ...state,
        parties: payload,
      }
    }
    case SHOW_PARTY_FULFILLED: {
      return {
        ...state,
        partyId: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default listReducer
