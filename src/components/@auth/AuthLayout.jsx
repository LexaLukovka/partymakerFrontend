import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginScene from './@login/LoginScene'
import RegisterScene from './@register/RegisterScene'

const styles = () => ({
  root: {
    height: '100%',
  },
  scene: {
    height: '100%',
  },
})

class AuthLayout extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.scene}>
          <Switch>
            <Route exact path="/auth/register" component={RegisterScene} />
            <Route exact path="/auth/login" component={LoginScene} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    )
  }
}

AuthLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AuthLayout)
