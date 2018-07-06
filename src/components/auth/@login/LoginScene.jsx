import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import LoginCard from './LoginCard/index'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const LoginScene = ({ classes }) =>
  <div className={classes.root}>
    <LoginCard />
  </div>

LoginScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginScene)
