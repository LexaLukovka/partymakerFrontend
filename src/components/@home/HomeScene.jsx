import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import connector from './connector'

const styles = {
  root: {},
}

const HomeScene = ({ classes, user }) =>
  <div className={classes.root}>
    Привет {user && user.name}
  </div>

HomeScene.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
}

export default withStyles(styles)(connector(HomeScene))
