import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography/Typography'

const styles = {
  root: {
    marginTop: 20,
    textAlign: 'center',
  },
}

const NotFound = ({ classes }) =>
  <Typography variant="display1"> Not found</Typography>

NotFound.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(NotFound)
