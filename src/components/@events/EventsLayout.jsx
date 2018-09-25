import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import EventsScene from './EventsScene'
import EventScene from './@events.id/EventScene'

const styles = {
  root: {},
}

const EventsLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/events" component={EventsScene} />
      <Route exact path="/events/:id" component={EventScene} />
    </Switch>
  </div>

EventsLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(EventsLayout)
