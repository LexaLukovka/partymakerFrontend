import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Layout from './components/Layout'
import createStore from './redux/store'

const App = () => (
  <Provider store={createStore(window.__STORE__)}>
    <Router>
      <Layout />
    </Router>
  </Provider>
)

export default hot(module)(App)
