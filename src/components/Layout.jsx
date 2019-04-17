import React from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'
import HomeScene from 'components/@home/HomeScene'
import IndexScene from './IndexScene'

const AuthLayout = loadable(() => import('./@auth/AuthLayout'))

const Layout = () =>
  <Switch>
    <Route exact path="/" component={IndexScene} />
    <Route path="/auth" component={props => <AuthLayout {...props} />} />
    <Route path="/home" component={HomeScene} />
  </Switch>

export default Layout
