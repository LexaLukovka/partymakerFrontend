import React from 'react'
import { object } from 'prop-types'
import { AppBar, Button, Toolbar, Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const Header = ({ classes }) =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>

Header.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Header)
