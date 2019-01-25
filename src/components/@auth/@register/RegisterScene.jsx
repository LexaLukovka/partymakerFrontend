import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const RegisterScene = ({ classes }) =>
  <div className={classes.root}>
    Register
  </div>

RegisterScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(RegisterScene)
