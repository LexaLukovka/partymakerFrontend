import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { persistor, history } from './store'
import LayoutScene from 'components/LayoutScene'
import Loading from 'components/Loading'
import 'moment/locale/ru.js'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(() =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Router>
          <LayoutScene />
        </Router>
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
)

if (module.hot) {
  module.hot.accept()
}
