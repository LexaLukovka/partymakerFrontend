import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const ChatForm = ({ classes }) =>
  <div className={classes.root}>
    chat form
  </div>

ChatForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(ChatForm)
