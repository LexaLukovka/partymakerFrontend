import { SET_CURRENT_ASSET } from '../action'

const initialState = {
  asset_id: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_ASSET:
      return {
        ...state,
        asset_id: payload,
      }

    default:
      return state
  }
}
