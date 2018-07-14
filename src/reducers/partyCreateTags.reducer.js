import { LOAD_PARTY_CREATE_TAGS_PENDING, LOAD_PARTY_CREATE_TAGS_FULFILLED } from '../actions/partyCreateTags.action'

const initialState = {
  loading: false,
  partyCreateTags: [],
}

const partyCreateTagsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PARTY_CREATE_TAGS_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_PARTY_CREATE_TAGS_FULFILLED: {
      return {
        ...state,
        partyCreateTags: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default partyCreateTagsReducer
