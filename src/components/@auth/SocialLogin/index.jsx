/* eslint-disable max-len */
import React, { Component } from 'react'
import { object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import GoogleIcon from 'mdi-react/GoogleIcon'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
    borderWidth: 2,
    border: 'solid',
    borderRadius: 25,
    alignItems: 'center',
    borderColor: 'inherit',
  },

  text: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 550,
    fontSize: 15,
  },
}

class SocialLogin extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Button color="inherit" className={classes.button}>
          <FacebookBoxIcon />
          <div className={classes.text}>Facebook</div>
        </Button>
        <Button color="inherit" className={classes.button}>
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
