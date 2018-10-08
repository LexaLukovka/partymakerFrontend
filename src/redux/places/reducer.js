/* eslint-disable no-fallthrough */
import { CAN_SELECT, LOAD_PLACES_FULFILLED, LOAD_PLACES_PENDING, LOAD_PLACES_REJECTED } from './action'
import placeActions, { OPEN_PLACE } from './place/action'
import placeReducer from './place/reducer'

const initialState = {
  loading: false,
  allLoaded: false,
  error: null,
  current: undefined,
  places: {},
  canSelect: false,
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
      const placeReducers = {}
      places.forEach(place => {
        placeReducers[place.id] = placeReducer(undefined, placeActions.save(place))
      })

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

    case CAN_SELECT:
      return {
        ...state,
        canSelect: action.payload,
      }

    default: {
      const places = { ...state.places }
      const place = placeReducer(state.current, action)
      if (!place.id) places[place.id] = place

      return {
        ...state,
        places,
      }
    }
  }
}

export default placesReducer
