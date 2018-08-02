import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Button from '@material-ui/core/es/Button/Button'
import { FacebookBoxIcon, GoogleIcon } from 'mdi-react'

const styles = {

  googleButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  facebookButton: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    marginLeft: -24,
  },
}

const SocialLogin = ({ classes }) =>
  <div className={classes.root}>
    <Button fullWidth className={classes.googleButton} variant="raised" color="primary">
      <GoogleIcon />
      <div className={classes.text}>Google</div>
    </Button>
    <Button fullWidth className={classes.facebookButton} variant="raised" color="primary">
      <FacebookBoxIcon />
      <div className={classes.text}>Facebook</div>
    </Button>
  </div>

SocialLogin.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SocialLogin)
