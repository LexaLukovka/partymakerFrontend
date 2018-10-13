import { LOAD_PLACE_FULFILLED, LOAD_PLACE_PENDING, LOAD_PLACE_REJECTED } from './action'

const initPlace = (place) => ({
  id: place.id,
  title: place.title,
  admin: place.admin,
  working_hours: place.working_hours,
  description: place.description,
  address: place.address,
  pictures: place.pictures,
  price: place.price,
})

const initialState = initPlace({
  loading: false,
  error: false,
})

const placeReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_PLACE_FULFILLED: {
      return {
        ...state,
        ...initPlace(payload),
      }
    }
    case LOAD_PLACE_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }

    case LOAD_PLACE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    default:
      return state
  }
}

export default placeReducer
