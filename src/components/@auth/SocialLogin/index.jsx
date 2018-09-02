/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Button } from '@material-ui/core'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import GoogleIcon from 'mdi-react/GoogleIcon'
import { BACKEND_URL } from 'services/constants'

const styles = {
  root: {
    display: 'flex',
  },
  googleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  facebookButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  text: {
    flexGrow: 1,
    paddingLeft: 5,
    textAlign: 'center',
  },
}

const SocialLogin = ({ classes }) =>
  <div className={classes.root}>
    <Button fullWidth className={classes.googleButton} variant="raised" color="primary">
      <GoogleIcon />
      <div className={classes.text}>Google</div>
    </Button>
    <a href={`https://graph.facebook.com/v2.1/oauth/authorize?redirect_uri=${BACKEND_URL}/authenticated/facebook&scope=email&response_type=code&client_id=2175525285996959`}>
      <Button fullWidth className={classes.facebookButton} variant="raised" color="primary">
        <FacebookBoxIcon />
        <div className={classes.text}>Facebook</div>
      </Button>
    </a>
  </div>

SocialLogin.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SocialLogin)
