/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = () => ({
  cssRoot: {
    display: 'block',
    width: '100%',
    padding: '15px',
    backgroundColor: 'rgba(0,0,0,0.84)',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.95)',
    },
  },
})

const TransparentButton = ({ classes, children, ...rest }) =>
  <Button {...rest} variant="raised" color="primary" size="large" className={classes.cssRoot}>
    {children}
  </Button>

TransparentButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}

export default withStyles(styles)(TransparentButton)
