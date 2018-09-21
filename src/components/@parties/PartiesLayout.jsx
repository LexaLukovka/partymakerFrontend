import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import PartiesScene from './PartiesScene'
import PartyScene from './@party/PartyScene'
import CreateLayout from './@create/CreateLayout'
import MembersScene from './@users/MembersScene'
import SignedInRoute from 'components/routes/SignedInRoute'
import EditLayout from './@party/@edit/EditLayout'

const styles = () => ({
  root: {
    height: '96%',
  },
})

const PartiesLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/parties" component={PartiesScene} />
      <SignedInRoute path="/parties/create" component={CreateLayout} />
      <Route exact path="/parties/:id" component={PartyScene} />
      <Route exact path="/parties/:id/users" component={MembersScene} />
      <SignedInRoute path="/parties/:id/edit" component={EditLayout} />
    </Switch>
  </div>

PartiesLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PartiesLayout)
