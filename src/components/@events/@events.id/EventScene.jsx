import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {},
}

const EventScene = ({ classes }) =>
  <div className={classes.root}>
    hello
  </div>

EventScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(EventScene)
