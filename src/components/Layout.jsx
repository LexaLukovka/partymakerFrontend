import React from 'react'
import loadable from '@loadable/component'
import { object } from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import IndexScene from './IndexScene'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles, AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'

const AsyncScene = loadable(() => import('./@async/AsyncScene'))

const AsyncRoute = () => <div><AsyncScene /></div>

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const Layout = ({ classes }) =>
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route exact path="/async" component={AsyncRoute} />
    </Switch>
  </div>

Layout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Layout)
