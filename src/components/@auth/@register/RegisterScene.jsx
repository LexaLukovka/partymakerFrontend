import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import RegisterForm from './RegisterForm'
import AuthDevider from '../AndDevider'
import SocialLogin from '../SocialLogin'

const styles = {
  root: {
    width: '100%',
    height: '100%',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: 'url(/images/register.jpg)',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  align: {
    maxWidth: 400,
    minHeight: 550,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  additionally: {
    background: 'yellow',
  },
}

const RegisterScene = ({ classes }) =>
  <div className={classes.root}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Регистрация - Partymaker</title>
    </Helmet>

    <div className={classes.container}>
      <div className={classes.align}>

        <RegisterForm />

        <AuthDevider />

        <SocialLogin />
      </div>
    </div>
  </div>

RegisterScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(RegisterScene)
