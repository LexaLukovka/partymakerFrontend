export default ({ DOM, state, helmet, jss, loadable }) =>
  `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
      <meta charset="utf-8">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <title>React SSR</title>
      ${loadable.getStyleTags()}
  </head>
  
  <body>
      <div id="app">${DOM}</div>
      <script>
          window.__STATE__ = ${JSON.stringify(state)}
      </script>
      ${loadable.getScriptTags()}
  </body>
  </html>
  `
