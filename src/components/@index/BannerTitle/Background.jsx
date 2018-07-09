/* eslint-disable react/forbid-prop-types,max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    background: 'rgb(0,0,0,0.5)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 250,
    minWidth: 400,
    position: 'relative',
    '@media only screen and (max-width: 640px)': {
      minWidth: 300,
    },
  },
}

const Background = ({ children, classes }) =>
  <div className={classes.root}>
    {children}
  </div>

Background.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
}

Background.defaultProps = {
  children: '',
}

export default withStyles(styles)(Background)
