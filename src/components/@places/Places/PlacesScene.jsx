import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const PlacesScene = ({ classes }) =>
  <div className={classes.root}>
    Places
  </div>

PlacesScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PlacesScene)
