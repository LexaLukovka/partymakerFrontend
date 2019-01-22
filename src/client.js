import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import createStore from './redux/store'

const App = (
  <Provider store={createStore(window.__STORE__)}>
    <Router>
      <Layout />
    </Router>
  </Provider>
)

ReactDOM.hydrate(App, document.getElementById('content'))
