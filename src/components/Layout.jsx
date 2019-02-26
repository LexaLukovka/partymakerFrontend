import React from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'
import HomeScene from 'src/components/@home/HomeScene'
import IndexScene from './IndexScene'
import Background from './Background'
import Alert from 'src/components/Alert'

const AuthLayout = loadable(() => import('./@auth/AuthLayout'))

const Layout = () =>
  <div>
    <Background>
      <Switch>
        <Route exact path="/" component={IndexScene} />
        <Route path="/home" component={HomeScene} />
        <Route path="/auth" component={props => <AuthLayout {...props} />} />
      </Switch>
    </Background>

    <Alert />
  </div>

export default Layout
