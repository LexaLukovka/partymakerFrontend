import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import PartiesScene from './PartiesScene'
import PartyScene from './@party/PartyScene'
import CreateLayout from './@create/CreateLayout'
import MembersScene from './@users/MembersScene'

const styles = () => ({
  root: {
    height: '97%',
  },
})

const PartiesLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/parties" component={PartiesScene} />
      <Route path="/parties/create" component={CreateLayout} />
      <Route exact path="/parties/:id" component={PartyScene} />
      <Route exact path="/parties/:id/users" component={MembersScene} />
    </Switch>
  </div>

PartiesLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PartiesLayout)
