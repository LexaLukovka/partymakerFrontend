import React from 'react'
import { hydrate } from 'react-dom'
import WithTheme from './components/WithTheme'
import WithRedux from './components/WithRedux'
import { BrowserRouter } from 'react-router-dom'
import App from 'src/App'

hydrate(
  <WithTheme>
    <WithRedux>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WithRedux>
  </WithTheme>,
  document.getElementById('root')
)
