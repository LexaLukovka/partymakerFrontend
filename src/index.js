import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>
)

export default hot(App)
