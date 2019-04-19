import React from 'react'
import { render, hydrate } from 'react-dom'
import WithTheme from './components/WithTheme'
import WithRedux from './components/WithRedux'
import { BrowserRouter } from 'react-router-dom'
import App from 'src/App'

const renderMethod = module.hot ? render : hydrate

renderMethod(
  <WithTheme>
    <WithRedux>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WithRedux>
  </WithTheme>,
  document.getElementById('root')
)

if (module.hot) module.hot.accept()