/* eslint-disable no-fallthrough */
import { OPEN_PLACE, LOAD_PLACES_FULFILLED, LOAD_PLACES_PENDING, LOAD_PLACES_REJECTED } from './action'
import placeReducer from './place/reducer'

const initialState = {
  loading: false,
  allLoaded: false,
  error: null,
  current: undefined,
  places: {},
}

const placesReducer = (state = initialState, action) => {
  switch (action.type) {

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
      const places = action.payload.data

      const placeReducers = places.reduce((obj, place) => {
        obj[place.id] = place
        return obj
      }, {})

      return {
        ...state,
        loading: false,
        allLoaded: true,
        places: placeReducers,
      }
    }

    case OPEN_PLACE:
      return {
        ...state,
        current: state.places[action.payload],
      }

    default: {
      const places = { ...state.places }
      const place = placeReducer(state.current, action)
      const place_id = place.id || (action.meta && action.meta.place_id)
      if (place_id) places[place_id] = place

      return { ...state, places }
    }
  }
}

export default placesReducer
