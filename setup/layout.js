import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'

export default ({ content, extractor, state, sheetsRegistry }) => {
  const helmet = Helmet.renderStatic()

  return `
    <!doctype html>
    <html lang="ru">
    <head>
        <title>Partymaker</title>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${extractor.getStyleTags()}
    </head>
    <body>
        <div id="root">${renderToString(content)}</div>
        <style id="jss-server-side">${sheetsRegistry}</style>
        <script>
            window.__STATE__ = ${JSON.stringify(state)}
        </script>
        ${extractor.getScriptTags()}
        <script>
    </body>
    </html>
  `
}
