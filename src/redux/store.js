import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import thunk from 'redux-thunk'

export default (initialState) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        promiseMiddleware,
      ),
    ),
  )
