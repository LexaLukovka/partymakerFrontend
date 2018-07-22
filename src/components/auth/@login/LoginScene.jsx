import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import LoginCard from './LoginCard/index'
import Background from '../authComponent/Background'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const LoginScene = ({ classes }) =>
  <Background className={classes.root}>
    <LoginCard />
  </Background>

LoginScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginScene)
