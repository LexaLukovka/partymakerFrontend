import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import path from 'path'
import { ChunkExtractor } from '@loadable/server'
import createStore, { initializeSession } from './redux/store'
import layout from './utils/layout'
import Layout from './components/Layout'

export default (request, response) => {
  const context = {}
  const store = createStore()
  const statsFile = path.resolve(__dirname, '../public/loadable-stats.json')
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['app'] })
  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter context={context} location={request.url}>
        <Layout />
      </StaticRouter>
    </Provider>,
  )

  store.dispatch(initializeSession())

  const DOM = renderToString(jsx)

  response.send(layout({
    DOM,
    state: store.getState(),
    helmet: Helmet.renderStatic(),
    loadable: extractor,
  }))
}
