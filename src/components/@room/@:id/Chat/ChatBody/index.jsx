import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const ChatBody = ({ classes }) =>
  <div className={classes.root}>
    chat body
  </div>

ChatBody.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(ChatBody)
