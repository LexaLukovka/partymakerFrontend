/* eslint-disable no-fallthrough */
import { LOAD_PLACES_FULFILLED, LOAD_PLACES_PENDING, LOAD_PLACES_REJECTED } from './action'
import placeActions, { OPEN_PLACE } from './place/action'
import placeReducer from './place/reducer'

import {
  IS_VOTED_PLACE_FULFILLED,
  IS_VOTED_PLACE_PENDING,
  IS_VOTED_PLACE_REJECTED,
  RESET_VOTED_PLACE,
  VOTE_PLACE_FULFILLED,
  VOTE_PLACE_PENDING,
  VOTE_PLACE_REJECTED,
  VOTE_PLACE,
} from 'src/redux/places/place/votes/action'
import { LOAD_PLACE_FULFILLED, LOAD_PLACE_PENDING, LOAD_PLACE_REJECTED } from 'src/redux/places/place/action'

const initialState = {
  loading: false,
  allLoaded: false,
  error: null,
  current: {},
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
      const placeReducers = {}
      places.forEach(place => {
        placeReducers[place.id] = placeReducer(null, placeActions.save(place))
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

    case LOAD_PLACE_PENDING:
    case LOAD_PLACE_FULFILLED:
    case LOAD_PLACE_REJECTED:

    case VOTE_PLACE:
    case RESET_VOTED_PLACE:

    case VOTE_PLACE_PENDING:
    case VOTE_PLACE_REJECTED:
    case VOTE_PLACE_FULFILLED:

    case IS_VOTED_PLACE_PENDING:
    case IS_VOTED_PLACE_REJECTED:
    case IS_VOTED_PLACE_FULFILLED: {

      const places = { ...state.places }
      const place = placeReducer(state.current, action)
      places[place.id] = place

      return {
        ...state,
        places,
      }
    }

    default: {
      return state
    }
  }
}

export default placesReducer
