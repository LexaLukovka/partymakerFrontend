import React from 'react'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'
import IndexScene from './IndexScene'

const AsyncScene = loadable(() => import('./@async/AsyncScene'))

const AsyncRoute = () => <div><AsyncScene /></div>

const Layout = () =>
  <Switch>
    <Route exact path="/" component={IndexScene} />
    <Route exact path="/async" component={AsyncRoute} />
  </Switch>

export default Layout
