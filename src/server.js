import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import path from 'path'
import { SheetsRegistry } from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import { ChunkExtractor } from '@loadable/server'
import createStore, { initializeSession } from './redux/store'
import layout from './utils/layout'
import Layout from './components/Layout'

export default (request, response) => {
  const sheetsRegistry = new SheetsRegistry()
  const sheetsManager = new Map()
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  })

  const generateClassName = createGenerateClassName()

  const context = {}
  const store = createStore()
  const statsFile = path.resolve(__dirname, '../public/loadable-stats.json')
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['app'] })

  const jsx = extractor.collectChunks(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <Provider store={store}>
          <StaticRouter context={context} location={request.url}>
            <Layout />
          </StaticRouter>
        </Provider>
      </MuiThemeProvider>
    </JssProvider>,
  )

  store.dispatch(initializeSession())

  const DOM = renderToString(jsx)

  response.send(layout({
    DOM,
    state: store.getState(),
    helmet: Helmet.renderStatic(),
    loadable: extractor,
    jss: sheetsRegistry.toString(),
  }))
}
