import React from 'react'
import { object } from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Alert from 'components/Alert'
import Drawer from 'components/Drawer'
import Container from 'components/Container'
import SignedInRoute from 'components/routes/SignedInRoute'
import PictureModal from 'components/PictureModal'
import ActionButton from 'components/ActionButton'

import IndexScene from './IndexScene/IndexScene'
import SettingsLayout from './@settings/SettingsLayout'
import AuthLayout from './@auth/AuthLayout'
import GroupLayout from './@group/GroupLayout'
import PlacesLayout from './@places/PlacesLayout'
import UserLayout from 'components/@users/UserLayout'
import Background from 'components/Background'
import connector from './connector'

const LayoutScene = ({ auth }) =>
  <div>
    <Background>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={IndexScene} />
          <Route path="/group" component={GroupLayout} />
          <Route path="/places" component={PlacesLayout} />
          <Route exact path="/user" render={() => <Redirect to={`/users/${auth.user.id}`} />} />
          <SignedInRoute path="/users" component={UserLayout} />
          <Route path="/auth" component={AuthLayout} />
          <SignedInRoute path="/settings" component={SettingsLayout} />
        </Switch>
      </Container>
    </Background>
    <ActionButton />
    <Drawer />
    <Alert />
    <PictureModal />
  </div>

LayoutScene.propTypes = {
  auth: object.isRequired,
}
export default withTheme(connector(LayoutScene))
