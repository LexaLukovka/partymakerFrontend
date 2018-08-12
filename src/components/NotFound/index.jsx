import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography/Typography'

const styles = {
  root: {
    paddingTop: 20,
  },
}

const NotFound = ({ classes }) =>
  <Typography className={classes.root} align="center" variant="display1"> Not found</Typography>

NotFound.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(NotFound)
