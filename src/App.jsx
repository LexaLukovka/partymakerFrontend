import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'
import Loading from 'src/components/Loading'
import store, { persistor } from './redux/store'
import 'assets/index.css'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router>
        <Layout />
      </Router>
    </PersistGate>
  </Provider>
)

export default hot(App)
