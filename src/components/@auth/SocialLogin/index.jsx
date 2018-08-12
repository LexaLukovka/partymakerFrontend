import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button/Button'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import GoogleIcon from 'mdi-react/GoogleIcon'

const styles = {

  root: {
    display: 'flex',
  },
  googleButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5,
  },

  facebookButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,

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
