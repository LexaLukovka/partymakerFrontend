import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { END } from 'redux-saga'
import rootSaga from 'src/redux/sagas'
import reducers from 'src/redux/app/reducers'

const isClient = typeof window !== 'undefined'

let initialState = {}
if (isClient) {
  initialState = window.__STATE__
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      promise,
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(rootSaga)

if (!isClient) {
  global.store = store
}

if (isClient) {
  window.store = store
}

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./app/reducers', () => {
    const nextRootReducer = reducers
    store.replaceReducer(nextRootReducer)
  })
}
store.runSaga = sagaMiddleware.run
store.close = () => store.dispatch(END)

export const persistor = isClient && persistStore(store)

export default store
