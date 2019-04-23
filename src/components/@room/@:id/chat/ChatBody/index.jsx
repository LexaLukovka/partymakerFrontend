import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
  },
}

const ChatBody = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
)

ChatBody.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(ChatBody)
