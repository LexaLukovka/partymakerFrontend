import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/es/Typography/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'

const Errors = ({ children }) =>
  <Typography
    variant="caption"
    color="error"
  >
    <Grid container justify="center">
      {children}
    </Grid>
  </Typography>

Errors.propTypes = {
  children: PropTypes.any,
}
Errors.defaultProps = {
  children: '',
}

export default Errors
