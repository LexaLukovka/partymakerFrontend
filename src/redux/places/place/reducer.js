import { LOAD_PLACE_FULFILLED, LOAD_PLACE_PENDING, LOAD_PLACE_REJECTED, SAVE_PLACE } from './action'
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

    default:
      return { ...state, votes: votesReducer(state.votes, { type, payload }) }
  }
}

export default placeReducer
