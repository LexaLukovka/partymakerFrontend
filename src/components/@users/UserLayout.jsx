import React from 'react'
import { object } from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import UsersScene from './UsersScene'
import connector from './connector'

const styles = () => ({
  root: {
    height: '98%',
  },
})

const UserLayout = ({ classes, auth }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/users/:id" component={UsersScene} />
      <Redirect to={`/users/${auth.user.id}`} />
    </Switch>
  </div>

UserLayout.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
}

export default withStyles(styles)(connector(UserLayout))
