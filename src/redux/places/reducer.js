/* eslint-disable no-fallthrough */
import { OPEN_PLACE, LOAD_PLACES_FULFILLED, LOAD_PLACES_PENDING, LOAD_PLACES_REJECTED } from './action'
import placeReducer from './place/reducer'
import arrayToObject from 'utils/arrayToObject'

const initialState = {
  loading: false,
  allLoaded: false,
  error: null,
  current: undefined,
  places: {},
}

const placesReducer = (state = initialState, { type, payload, meta }) => {
  switch (type) {

    case OPEN_PLACE:
      return {
        ...state,
        current: payload,
      }

    case LOAD_PLACES_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_PLACES_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case LOAD_PLACES_FULFILLED: {
      return {
        ...state,
        loading: false,
        allLoaded: true,
        places: arrayToObject(payload.data),
      }
    }

    default: {
      const places = { ...state.places }
      const place = placeReducer(places[state.current], { type, payload, meta })
      const place_id = (place && place.id) || (meta && meta.place_id)
      if (place_id) places[place_id] = place

      return { ...state, places }
    }
  }
}

export default placesReducer
