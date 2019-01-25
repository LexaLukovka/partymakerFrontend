import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginScene from './@login/LoginScene'
import RegisterScene from './@register/RegisterScene'

const styles = () => ({
  root: {
    height: '100%',
    padding: '0 5px',
    minHeight: 500,
    maxWidth: 500,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  scene: {
    flexGrow: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  devider: {
    flexGrow: 1,
  },
  social: {
    flexGrow: 2,
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
