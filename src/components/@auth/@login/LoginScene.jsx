import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const LoginScene = ({ classes }) =>
  <div className={classes.root}>
    Login Scene
  </div>

LoginScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(LoginScene)
