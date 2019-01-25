export default ({ DOM, state, helmet, jss, loadable }) =>
  `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
      <meta charset="utf-8">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <title>Partymaker</title>
      ${loadable.getStyleTags()}
      <meta content="width=device-width, minimum-scale=1, shrink-to-fit=no" name="viewport">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
      <link rel="manifest" href="/site.webmanifest">
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#9306bc">
      <meta name="msapplication-TileColor" content="#9f00a7">
      <meta name="theme-color" content="#9306bc">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" type="text/css" href="/index.css">
  </head>
  
  <body>
      <div id="app">${DOM}</div>
      <style id="jss-server-side">${jss}</style>
      <script>
          window.__STATE__ = ${JSON.stringify(state)}
      </script>
      ${loadable.getScriptTags()}
  </body>
  </html>
  `
