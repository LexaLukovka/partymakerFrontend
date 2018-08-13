import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import PartiesScene from './@parties/PartiesScene'

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
    </Switch>
  </div>

UserLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(UserLayout)
