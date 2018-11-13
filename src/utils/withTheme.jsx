import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
    fontSize: 13,
    headline: {
      fontSize: '1.1rem',
    },
    title: {
      letterSpacing: '0',
    },
    // headline: {
    //   fontSize: '1.19rem',
    // },
    body1: {
      fontSize: '16px',
    },
    body2: {
      letterSpacing: '-0.7px',
    },
    caption: {
      fontSize: '0.7rem',
      letterSpacing: '-0.7px',
    },
  },

  spacing: {
    size1: '0.25rem',
    size2: '0.50rem',
    size3: '1rem',
    size4: '1.5rem',
    size5: '3rem',
  },

  palette: {
    primary: {
      light: '#D404DC',
      main: '#9306BC',
      dark: '#9306BC',
    },
    secondary: {
      light: '#f0f0f0',
      main: '#fff',
      dark: '#ff0033',
    },
  },
})

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
