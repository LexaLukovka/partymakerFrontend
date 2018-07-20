import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegisterScene from './auth/@register/RegisterScene'
import withTheme from '../utils/withTheme'
import LoginScene from './auth/@login/LoginScene'
import Header from './Header'
import Alert from './Alert'
import AuthRoute from './auth/AuthRoute'
import SettingsScene from './@settings/SettingsScene'
import PartyCreateScene from './@patry-create/PartyCreateScene'
import PartiesScene from './@parties/PartiesScene'
import PartyScene from './@party/PartyScene'

const LayoutScene = () =>
  <main>
    <Header />
    <div style={{ paddingTop: 55 }}>
      <Switch>
        <Route exact path="/" component={PartiesScene} />
        <Route exact path="/register" component={RegisterScene} />
        <Route exact path="/login" component={LoginScene} />
        <Route exact path="/settings" component={SettingsScene} />
        <AuthRoute exact path="/party/create" component={PartyCreateScene} />
        <Route exact path="/parties/:id" component={PartyScene} />
      </Switch>
    </div>
    <Alert />
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
