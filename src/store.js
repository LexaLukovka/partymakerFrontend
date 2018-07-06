import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import { getSavedUser } from './actions/auth.action'
import Cache from './services/Cache'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(
    thunk,
    promiseMiddleware(),
  )),
)

if (Cache.has('user')) {
  store.dispatch(getSavedUser())
}

export default store
