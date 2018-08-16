import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

import UserScene from './UserScene'
import UsersScene from './UsersScene'

const styles = () => ({
  root: {
    height: '100%',
  },
})

const UserLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/user" component={UserScene} />
      <Route exact path="/user/:id" component={UsersScene} />
    </Switch>
  </div>

UserLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(UserLayout)
