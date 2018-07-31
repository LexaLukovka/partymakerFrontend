import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from '../utils/withTheme'
import IndexScene from './@index/IndexScene'
import Header from './Header'
import Alert from './Alert'
import AuthRoute from './@auth/AuthRoute'
import SettingsScene from './@settings/SettingsScene'
import PartyCreateScene from './@patry-create/PartyCreateScene'
import PartiesScene from './@parties/PartiesScene'
import PartyScene from './@party/PartyScene'
import Drawer from './Drawer'
import AuthLayout from './@auth/AuthLayout'

const LayoutScene = () =>
  <main>
    <Header />
    <section style={{ paddingTop: 55, height: '100%' }}>
      <Switch>
        <Route exact path="/" component={IndexScene} />
        <AuthRoute exact path="/settings" component={SettingsScene} />
        <AuthRoute exact path="/party/create" component={PartyCreateScene} />
        <Route exact path="/parties" component={PartiesScene} />
        <Route exact path="/parties/:id" component={PartyScene} />
        <Route path="/" component={AuthLayout} />
      </Switch>
    </section>
    <Drawer />
    <Alert />
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
