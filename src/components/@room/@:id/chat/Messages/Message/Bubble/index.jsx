import React from 'react'
import { object, func, bool, string, array, shape, node } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    padding: 15,
    boxShadow: '2px 2px 3px -1px rgba(156, 169, 189, 0.3)',
    borderRadius: 20,
  },
}

const Bubble = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Bubble.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Bubble)
