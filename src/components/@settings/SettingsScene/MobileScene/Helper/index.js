/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { node, object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

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
