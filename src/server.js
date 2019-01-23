import createStore, { initializeSession } from './redux/store'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import layout from './utils/layout'
import Helmet from 'react-helmet'
import React from 'react'
import Layout from './components/Layout'

export default (request, response) => {
  const context = {}
  const store = createStore()

  store.dispatch(initializeSession())

  const DOM = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={request.url}>
        <Layout />
      </StaticRouter>
    </Provider>,
  )
  const HtmlLayout = layout(DOM, store.getState(), Helmet.renderStatic())

  response.send(HtmlLayout)
}
