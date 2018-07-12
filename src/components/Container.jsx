import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: 1680,
    minWidth: '100%',
    paddingLeft: theme.spacing.size2,
    paddingRight: theme.spacing.size2,
    '@media only screen and (max-width: 1280px)': {
      minWidth: '100%',
    },
    '@media only screen and (max-width: 320px)': {
      minWidth: '100%',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})

const Container = ({ children, className, classes }) =>
  <div className={`${classes.root} ${className}`}>
    {children}
  </div>

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
Container.defaultProps = {
  className: '',
}

export default withStyles(styles)(Container)
