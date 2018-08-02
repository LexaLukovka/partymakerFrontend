import { applyMiddleware, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from 'src/redux/index'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(
    thunk,
    promiseMiddleware(),
  )),
)

export const persistor = persistStore(store)

export default store

