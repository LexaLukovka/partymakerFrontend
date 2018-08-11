import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'


const styles = () => ({
  root: {},
})

const UserScene = ({ classes }) =>
  <div className={classes.root}>
    User profile
  </div>

UserScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserScene)
