import React from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import { CircularProgress } from '@material-ui/core'

const styles = {}

const Loading = ({ classes, className }) =>
  <div className={className}>
    <CircularProgress classes={classes} size={60} />
  </div>

Loading.propTypes = {
  classes: object.isRequired,
  className: string.isRequired,
}

export default withStyles(styles)(Loading)
