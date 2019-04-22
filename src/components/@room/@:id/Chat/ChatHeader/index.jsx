import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const ChatHeader = ({ classes }) =>
  <div className={classes.root}>
    chat header
  </div>

ChatHeader.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(ChatHeader)
