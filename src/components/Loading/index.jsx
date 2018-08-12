import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const Loading = ({ classes }) =>
  <div className={classes.root}>
    <CircularProgress className={classes.progress} size={80} />
  </div>

Loading.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Loading)
