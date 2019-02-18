import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'src/redux/app/sagas'
import reducers from './app/reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(rootSaga)

export default store
