import popularRoutes from '../popularRoute.json'

export const LOAD_POPULAR_ROUTES_PENDING = 'LOAD_POPULAR_ROUTES_PENDING'
export const LOAD_POPULAR_ROUTES_FULFILLED = 'LOAD_POPULAR_ROUTES_FULFILLED'

export const load = () => dispatch => {
  dispatch({
    type: LOAD_POPULAR_ROUTES_PENDING,
  })
  setTimeout(() => dispatch({
    type: LOAD_POPULAR_ROUTES_FULFILLED,
    payload: popularRoutes,
  }), 500)
}
