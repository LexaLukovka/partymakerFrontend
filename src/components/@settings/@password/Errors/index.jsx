import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/es/Typography/Typography'

const Errors = ({ children }) =>
  <Typography align="center" variant="caption" color="error">
    {children}
  </Typography>

Errors.propTypes = {
  children: PropTypes.any,
}
Errors.defaultProps = {
  children: '',
}

export default Errors
