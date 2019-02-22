import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import path from 'path'
import { SheetsRegistry } from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ChunkExtractor } from '@loadable/server'
import layout from './setup/layout'
import Layout from './components/Layout'
import Loading from 'src/components/Loading'
import store, { persistor } from './redux/store'
import theme from './styles/theme'
import sagas from 'src/redux/sagas'

export default async (request, response) => {
  const sheetsRegistry = new SheetsRegistry()
  const sheetsManager = new Map()
  const context = {}

  store.runSaga(sagas).toPromise().then(() => {
    const statsFile = path.resolve(__dirname, '../public/loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile, entrypoints: ['app'] })

    const jsx = extractor.collectChunks(
      <JssProvider registry={sheetsRegistry} generateClassName={createGenerateClassName()}>
        <MuiThemeProvider theme={createMuiTheme(theme)} sheetsManager={sheetsManager}>
          <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
              <StaticRouter context={context} location={request.url}>
                <Layout />
              </StaticRouter>
            </PersistGate>
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
  })

  store.close()
}
