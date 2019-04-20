import React from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'
import AuthGate from 'components/gates/AuthGate'
import IndexScene from './IndexScene'
import HomeScene from './@home/HomeScene'
import RoomLayout from './@room/RoomLayout'

const AuthLayout = loadable(() => import('./@auth/AuthLayout'))

const Layout = () =>
  <Switch>
    <Route exact path="/" component={IndexScene} />
    <Route path="/auth" component={props => <AuthLayout {...props} />} />
    <AuthGate path="/home" component={HomeScene} />
    <AuthGate path="/room" component={RoomLayout} />
  </Switch>

export default Layout
