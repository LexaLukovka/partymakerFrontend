import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import RegisterScene from 'src/components/@auth/@register/RegisterScene'
import LoginScene from './@login/LoginScene'
import Background from './Background'
import AuthDevider from './SocialLogin/AuthDevider'
import SocialLogin from './SocialLogin'


const styles = theme => ({
  root: {
    height: '100%',
    padding: '0 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const index = ({ classes }) =>
  <Background classes={classes}>
    <Switch>
      <Route exact path="/register" component={RegisterScene} />
      <Route exact path="/login" component={LoginScene} />
    </Switch>
    <AuthDevider />
    <SocialLogin />
  </Background>

index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(index)
