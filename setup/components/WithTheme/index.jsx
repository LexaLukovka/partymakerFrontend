import React from 'react'
import { node, object } from 'prop-types'
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import theme from 'config/theme'
import RemoveServerStyles from './RemoveServerStyles'

const WithTheme = ({ children, sheetsRegistry }) => {
  const isServer = typeof window === 'undefined'
  const sheetsManager = isServer ? new Map() : undefined

  return (
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={createGenerateClassName()}
    >
      <MuiThemeProvider
        theme={createMuiTheme(theme)}
        sheetsManager={sheetsManager}
      >
        {isServer ? children : <RemoveServerStyles>{children}</RemoveServerStyles>}
      </MuiThemeProvider>
    </JssProvider>
  )
}

WithTheme.propTypes = {
  children: node.isRequired,
  sheetsRegistry: object,
}

export default WithTheme
