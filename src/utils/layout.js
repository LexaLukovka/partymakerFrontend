export default ({ DOM, state, helmet }) =>
  `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
      <meta charset="utf-8">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <title>React SSR</title>
  </head>
  
  <body>
      <div id="app">${DOM}</div>
      <script>
          window.__STATE__ = ${JSON.stringify(state)}
      </script>
      <script src="app.js"></script>
  </body>
  </html>
  `
