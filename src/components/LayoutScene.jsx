import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegisterScene from './auth/@register/RegisterScene'
import withTheme from '../utils/withTheme'
import LoginScene from './auth/@login/LoginScene'
import Header from './Header'
import IndexScene from './@index/IndexScene'
import Alert from './Alert'
import CargoScene from './@cargo/CargoScene'
import ShowCargoScene from './@cargo-id/ShowCargoScene'
import CreateScene from './@cargo-create/@create/CreateScene'
import CreatedScene from './@cargo-create/@created/CreatedScene'
import AuthRoute from './auth/AuthRoute'
import SettingsScene from './@settings/SettingsScene'
import PartyCreateScene from './@patry-create/PartyCreateScene'

const LayoutScene = () =>
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route exact path="/register" component={RegisterScene} />
      <Route exact path="/login" component={LoginScene} />
      <Route exact path="/settings" component={SettingsScene} />
      <Route exact path="/cargo" component={CargoScene} />
      <AuthRoute exact path="/party/create" component={PartyCreateScene} />
      <AuthRoute exact path="/cargo/create" component={CreateScene} />
      <AuthRoute exact path="/cargo/created" component={CreatedScene} />
      <Route exact path="/cargo/:id" component={ShowCargoScene} />
    </Switch>
    <Alert />
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
