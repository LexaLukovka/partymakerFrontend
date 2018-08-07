import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = {
  root: {
    fontSize: 14,
  },
}

const Helper = ({ classes, children }) =>
  <Typography variant="caption" className={classes.root}>{children}</Typography>


Helper.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Helper)
