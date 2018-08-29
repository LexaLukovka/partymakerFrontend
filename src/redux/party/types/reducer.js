import partyTypes from './partyTypes'
import { RESET_PARTY_TYPE, SELECT_PARTY_TYPE } from './action'

const initialState = {
  types: partyTypes,
  selected: null,
}

const partyTypesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_PARTY_TYPE:
      return {
        ...state,
        selected: payload,
      }
    case RESET_PARTY_TYPE:
      return {
        ...state,
        selected: initialState.selected,
      }
    default:
      return state
  }
}

export default partyTypesReducer
