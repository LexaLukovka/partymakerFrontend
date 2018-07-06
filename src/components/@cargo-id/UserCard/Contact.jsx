import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}

const Contact = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Contact)
