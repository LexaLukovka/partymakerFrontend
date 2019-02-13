/* eslint-disable max-len */
import React, { Component } from 'react'
import { object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import GoogleIcon from 'mdi-react/GoogleIcon'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    color: 'white',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 25,
  },

  text: {
    flexGrow: 1,
    paddingLeft: 5,
    textAlign: 'center',
  },
}

class SocialLogin extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          className={classes.button}
        >
          <FacebookBoxIcon />
          <div className={classes.text}>Facebook</div>
        </Button>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          className={classes.button}
        >
          <GoogleIcon />
          <div className={classes.text}>Google</div>
        </Button>
      </div>
    )
  }
}

SocialLogin.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(withRouter(SocialLogin))
