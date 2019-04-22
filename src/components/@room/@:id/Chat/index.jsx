import React from 'react'
import { node, object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {}
}

const Chat = ({ classes, children }) =>
  <section className={classes.root}>
    {children}
  </section>

Chat.propTypes = {
  classes: object.isRequired,
  children: node.isRequired
}

export default withStyles(styles)(Chat)
