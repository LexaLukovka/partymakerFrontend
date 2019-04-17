import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router-dom'

import LoginScene from './@login/LoginScene'
import RegisterScene from './@register/RegisterScene'
import ActivateScene from './@activate/ActivateScene'
import PasswordLayout from './@password/PasswordLayout'

import Header from '../IndexScene/LandingHeader'
import AuthDevider from './AndDevider'
import SocialLogin from './SocialLogin'

const styles = () => ({
  root: {
    height: '100%',
    background: 'rgb(0,0,0,0.2)',
  },
  container: {
    maxWidth: 400,
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scene: {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  divider: {
    color: 'white',
  }
})

const AuthLayout = ({ classes }) =>
  <div className={classes.root}>
    <Header />
    <div className={classes.container}>
      <div className={classes.scene}>
        <div>
          <Switch>
            <Route exact path="/auth/register" component={RegisterScene} />
            <Route exact path="/auth/login" component={LoginScene} />
            <Route exact path="/auth/activate/:hash" component={ActivateScene} />
            <Route path="/auth/password" component={PasswordLayout} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
        <div className={classes.divider}>
          <AuthDevider />
        </div>
        <SocialLogin />
      </div>
    </div>
  </div>

AuthLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AuthLayout)
