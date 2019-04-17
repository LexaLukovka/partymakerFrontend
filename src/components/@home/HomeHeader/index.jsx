import React from 'react'
import { node } from 'prop-types'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import Logo from './Logo'
import Navigation from './Navigation'

const HomeHeader = ({ children }) =>
  <AppBar position="static" color="primary">
    <Toolbar>
      <Logo />
      <Navigation>
        <Button color="secondary">мои события</Button>
      </Navigation>
      {children}
    </Toolbar>
  </AppBar>

HomeHeader.propTypes = {
  children: node.isRequired
}

export default HomeHeader
