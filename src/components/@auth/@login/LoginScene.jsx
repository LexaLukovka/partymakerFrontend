import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Card } from '@material-ui/core'

import LoginForm from './LoginForm'

const styles = theme => ({
  title: {
    marginTop: theme.spacing.size3,
  },
})

class LoginScene extends Component {
  componentWillMount() {
    document.title = 'Войти'
  }

  render() {
    const { classes } = this.props
    return (
      <Card>
        <Typography variant="subheading" align="center" className={classes.title}>ВОЙТИ</Typography>
        <LoginForm />
      </Card>
    )
  }
}

LoginScene.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(LoginScene)
