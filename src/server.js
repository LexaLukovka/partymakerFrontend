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
import store from './redux/store'
import layout from './setup/layout'
import Layout from './components/Layout'
import theme from './styles/theme'

export default (request, response) => {
  const sheetsRegistry = new SheetsRegistry()
  const sheetsManager = new Map()
  const context = {}
  const statsFile = path.resolve(__dirname, '../public/loadable-stats.json')
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['app'] })

  const jsx = extractor.collectChunks(
    <JssProvider registry={sheetsRegistry} generateClassName={createGenerateClassName()}>
      <MuiThemeProvider theme={createMuiTheme(theme)} sheetsManager={sheetsManager}>
        <Provider store={store}>
          <StaticRouter context={context} location={request.url}>
            <Layout />
          </StaticRouter>
        </Provider>
      </MuiThemeProvider>
    </JssProvider>,
  )

  const DOM = renderToString(jsx)

  response.send(layout({
    DOM,
    state: store.getState(),
    helmet: Helmet.renderStatic(),
    loadable: extractor,
    jss: sheetsRegistry.toString(),
  }))
}
