import React from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'
import AuthGate from 'components/gates/AuthGate'
import IndexScene from './IndexScene'
import HomeScene from './@home/HomeScene'
import RoomLayout from './@room/RoomLayout'
import InviteLayout from './@invite/InviteLayout'
import ProfileScene from './@profile/ProfileLayout'

const AuthLayout = loadable(() => import('./@auth/AuthLayout'))

const Layout = () =>
  <Switch>
    <Route exact path="/" component={IndexScene} />
    <Route path="/auth" component={props => <AuthLayout {...props} />} />
    <Route path="/invite" component={InviteLayout} />
    <AuthGate path="/home" component={HomeScene} />
    <AuthGate path="/room" component={RoomLayout} />
    <AuthGate path="/profile" component={ProfileScene} />
  </Switch>

export default Layout
