import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import RegisterScene from './@register/RegisterScene'
import LoginScene from './@login/LoginScene'
import AuthDevider from './SocialLogin/AuthDevider'
import SocialLogin from './SocialLogin'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100%',
    padding: '0 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

class AuthLayout extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.layout.background('http://localhost:3333/images/summer.jpg')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Switch>
          <Route exact path="/register" component={RegisterScene} />
          <Route exact path="/login" component={LoginScene} />
        </Switch>
        <AuthDevider />
        <SocialLogin />
      </div>
    )
  }
}

AuthLayout.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(AuthLayout))
