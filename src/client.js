import React from 'react'
import ReactDOM from 'react-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import App from './App'
import './styles/index.css'

class Client extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return <App />
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

const generateClassName = createGenerateClassName()

ReactDOM.hydrate(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Client />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('app'))
