import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const styles = {
  root: {
    marginTop: 20,
    textAlign: 'center',
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
