import React from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'
import IndexScene from './IndexScene'
import Background from './Background'

const AuthLayout = loadable(() => import('./@auth/AuthLayout'))

const Layout = () =>
  <div>
    <Background>
      <Switch>
        <Route exact path="/" component={IndexScene} />
        <Route path="/auth" component={props => <AuthLayout {...props} />} />
      </Switch>
    </Background>
  </div>

export default Layout
