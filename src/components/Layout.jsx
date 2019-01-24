import React from 'react'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'
import IndexScene from './IndexScene'
import Header from 'src/components/Header'

const AsyncScene = loadable(() => import('./@async/AsyncScene'))

const AsyncRoute = () => <div><AsyncScene /></div>

const Layout = () =>
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route exact path="/async" component={AsyncRoute} />
    </Switch>
  </div>

export default Layout
