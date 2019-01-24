import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'
import createStore from './redux/store'

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
  logLevel: 'debug',
})

const App = (
  <Provider store={createStore(window.__STORE__)}>
    <Router>
      <Layout />
    </Router>
  </Provider>
)

const HotApp = hot(App)

ReactDOM.hydrate(<HotApp />, document.getElementById('app'))
