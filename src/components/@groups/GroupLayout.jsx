import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

import { Route, Switch } from 'react-router-dom'
import SignedInRoute from 'components/routes/SignedInRoute'

import CreateScene from './@create/CreateScene'
import GroupScene from 'components/@groups/@groups.id/GroupScene'
import EditLayout from 'components/@groups/@groups.id/@edit/EditLayout'

const styles = () => ({
  root: {
    height: '96%',
  },
})

const GroupLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route path="/group/create" exact component={CreateScene} />
      <Route exact path="/group/:id" component={GroupScene} />
      <SignedInRoute path="/group/:id/edit" component={EditLayout} />
    </Switch>
  </div>

GroupLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(GroupLayout)
