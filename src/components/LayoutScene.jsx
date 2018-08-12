import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Alert from 'components/Alert'
import Drawer from 'components/Drawer'
import Container from 'components/Container'
import AuthRoute from 'components/AuthRoute'

import IndexScene from './@index/IndexScene'
import SettingsLayout from './@settings/SettingsLayout'
import AuthLayout from './@auth/AuthLayout'
import PlacesLayout from './@places/PlacesLayout'
import PartiesLayout from './@parties/PartiesLayout'
import UserLayout from 'components/@user/UserLayout'
import Background from 'components/Background'

const LayoutScene = () =>
  <div>
    <Background>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={IndexScene} />
          <Route path="/parties" component={PartiesLayout} />
          <Route path="/places" component={PlacesLayout} />
          <Route path="/auth" component={AuthLayout} />
          <AuthRoute path="/settings" component={SettingsLayout} />
          <AuthRoute path="/user" component={UserLayout} />
        </Switch>
      </Container>
    </Background>
    <Drawer />
    <Alert />
  </div>
export default withTheme(LayoutScene)
