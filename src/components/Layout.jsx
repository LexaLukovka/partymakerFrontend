import React from 'react'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'
import IndexScene from './IndexScene'

const AsyncScene = loadable(() => import('./@async/AsyncScene'))
const AuthLayout = loadable(() => import('./@auth/AuthLayout'))

const Layout = () =>
  <div>
    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route path="/auth" component={props => <AuthLayout {...props} />} />
      <Route exact path="/async" component={() => <AsyncScene />} />
    </Switch>
  </div>

export default Layout
