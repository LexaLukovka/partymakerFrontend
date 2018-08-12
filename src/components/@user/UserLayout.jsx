import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import AuthRoute from 'components/AuthRoute'

import PartiesScene from './@parties/PartiesScene'
import PartyScene from './@parties/@party/PartyScene'
import EditLayout from './@parties/@party/PartyCard/@edit/EditLayout'

import UserScene from './UserScene'

const styles = () => ({
  root: {
    height: '100%',
  },
})

const UserLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/user" component={UserScene} />
      <Route exact path="/user/parties" component={PartiesScene} />
      <Route exact path="/user/parties/:id" component={PartyScene} />
      <AuthRoute path="/user/parties/:id/edit" component={EditLayout} />
    </Switch>
  </div>

UserLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(UserLayout)
