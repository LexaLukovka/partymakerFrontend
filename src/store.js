import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from 'src/redux/index'

export const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(reducers),
  reducers,
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history),
    promiseMiddleware(),
  )),
)

export const persistor = persistStore(store)

export default store

if (module.hot) {
  module.hot.accept('./redux', () => {
    store.replaceReducer(connectRouter(history)(reducers))
  })
}
