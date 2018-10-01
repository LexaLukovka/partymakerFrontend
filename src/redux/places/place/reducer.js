import { LOAD_PLACE_FULFILLED, LOAD_PLACE_PENDING, LOAD_PLACE_REJECTED, SAVE_PLACE } from './action'
import {
  IS_VOTED_PLACE_FULFILLED,
  IS_VOTED_PLACE_PENDING,
  IS_VOTED_PLACE_REJECTED,
  RESET_VOTED_PLACE,
  VOTE_PLACE_FULFILLED,
  VOTE_PLACE_PENDING,
  VOTE_PLACE_REJECTED,
  VOTE_PLACE,
} from './votes/action'
import votesReducer from './votes/reducer'

const initialState = {
  id: null,
  title: '',
  admin: {},
  working_hours: '',
  description: '',
  address: {},
  pictures: [],
  price: '',
  rating: '',
  votes: {},
}

const placeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_PLACE:
      return {
        ...state,
        id: payload.id,
        title: payload.title,
        admin: payload.admin,
        working_hours: payload.working_hours,
        description: payload.description,
        address: payload.address,
        price: payload.price,
        pictures: payload.pictures.map(p => p.url),
        rating: payload.rating,
      }

    case LOAD_PLACE_PENDING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_PLACE_FULFILLED:
      return {
        ...state,
        id: payload.id,
        title: payload.title,
        admin: payload.admin,
        working_hours: payload.working_hours,
        description: payload.description,
        address: payload.address,
        price: payload.price,
        pictures: payload.pictures.map(p => p.url),
        rating: payload.rating,
      }

    case LOAD_PLACE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case VOTE_PLACE:
    case VOTE_PLACE_PENDING:
    case VOTE_PLACE_REJECTED:
    case VOTE_PLACE_FULFILLED:
    case RESET_VOTED_PLACE:
    case IS_VOTED_PLACE_PENDING:
    case IS_VOTED_PLACE_REJECTED:
    case IS_VOTED_PLACE_FULFILLED:
      return { ...state, votes: votesReducer(state.votes, { type, payload }) }

    default:
      return state
  }
}

export default placeReducer
