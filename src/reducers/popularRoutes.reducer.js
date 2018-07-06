import { LOAD_POPULAR_ROUTES_FULFILLED, LOAD_POPULAR_ROUTES_PENDING } from '../actions/popularRoutes.action'

const initialState = {
  loading: false,
  popularRoutes: [],
}

const popularRoute = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POPULAR_ROUTES_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_POPULAR_ROUTES_FULFILLED: {
      return {
        ...state,
        popularRoutes: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default popularRoute
