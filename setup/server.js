import React from 'react'
import { SheetsRegistry } from 'jss'
import { StaticRouter } from 'react-router-dom'
import store from 'src/redux/store'
import App from 'src/App'
import createLayout from './layout'
import withCodeSplitting from './utils/withCodeSplitting'
import WithTheme from './components/WithTheme'
import WithRedux from './components/WithRedux'
import PreloadManager from './components/PreloadManager'
import sagas from 'src/redux/saga'

export default () => async (request, response) => {
  const sheetsRegistry = new SheetsRegistry()
  const context = {}
  const promises = []

  const [jsx, extractor] = withCodeSplitting(
    <WithTheme sheetsRegistry={sheetsRegistry}>
      <WithRedux>
        <PreloadManager promises={promises} store={store} request={request}>
          <StaticRouter context={context} location={request.url}>
            <App />
          </StaticRouter>
        </PreloadManager>
      </WithRedux>
    </WithTheme>
  )

  await Promise.all(promises)

  store.close()
  await store.runSaga(sagas).toPromise()

  const layout = createLayout({
    content: jsx,
    state: store.getState(),
    extractor,
    sheetsRegistry,
  })

  response.send(layout)
}
