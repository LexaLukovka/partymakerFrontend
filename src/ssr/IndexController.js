import createStore from 'redux'
import { initializeSession } from '../redux/store'
import { renderToString } from 'react-dom/server'
import { Provider as ReduxProvider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import layout from './layout'
import Helmet from 'react-helmet'
import React from 'react'

class IndexController {
  async index(request, reponse) {
    const context = {}
    const store = createStore()

    store.dispatch(initializeSession())

    const DOM = renderToString(
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={request.url}>
          <Layout />
        </StaticRouter>
      </ReduxProvider>,
    )

    reponse.send(layout(DOM, store.getState(), Helmet.renderStatic()))
  }
}

export default new IndexController()
