import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import PartiesScene from './PartiesScene'
import PartyScene from './@party/PartyScene'
import CreateLayout from './@create/CreateLayout'
import MembersScene from './@users/MembersScene'
import AuthRoute from 'components/AuthRoute'
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
      <AuthRoute path="/parties/create" component={CreateLayout} />
      <Route exact path="/parties/:id" component={PartyScene} />
      <Route exact path="/parties/:id/users" component={MembersScene} />
      <AuthRoute path="/parties/:id/edit" component={EditLayout} />
    </Switch>
  </div>

PartiesLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PartiesLayout)
