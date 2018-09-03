/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { withStyles, Button } from '@material-ui/core'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import GoogleIcon from 'mdi-react/GoogleIcon'
import connector from '../connector'

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

class SocialLogin extends Component {
  loginFacebook = () => {
    this.props.actions.auth.facebookLogin()
  }

  componentClicked(click) {
    console.log(click)
  }

  loginGoogle = () => {
    this.props.actions.auth.facebookLogin()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <FacebookLogin
          appId="2175525285996959"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.loginGoogle}
          render={props => (
            <Button
              {...props}
              fullWidth
              className={classes.facebookButton}
              variant="raised"
              color="primary"
              onClick={this.loginFacebook}
            >
              <FacebookBoxIcon />
              <div className={classes.text}>Facebook</div>
            </Button>
          )}
        />
        <GoogleLogin
          clientId="860110060796-1oa17isdultt097medmjdslaovs204o9.apps.googleusercontent.com"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          onSuccess={this.loginGoogle}
          onFailure={this.loginGoogle}
          render={props => (
            <Button
              {...props}
              fullWidth
              className={classes.googleButton}
              variant="raised"
              color="primary"
              onClick={this.loginFacebook}
            >
              <GoogleIcon />
              <div className={classes.text}>Google</div>
            </Button>
          )}
        />
      </div>
    )
  }
}

SocialLogin.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(SocialLogin))
