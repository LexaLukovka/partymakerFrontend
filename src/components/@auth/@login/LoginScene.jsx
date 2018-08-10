import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Card } from '@material-ui/core'

import LoginForm from './LoginForm'

const styles = theme => ({
  title: {
    marginTop: theme.spacing.size3,
  },
})

const LoginScene = ({ classes }) =>
  <Card>
    <Typography variant="subheading" align="center" className={classes.title}>ВОЙТИ</Typography>
    <LoginForm />
  </Card>

LoginScene.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(LoginScene)
