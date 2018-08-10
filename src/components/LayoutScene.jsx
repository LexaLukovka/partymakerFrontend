import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
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
import connector from './connector'
import PartiesLayout from './@parties/PartiesLayout'
import UserLayout from 'components/@user/UserLayout'

const styles = {
  root: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}

const LayoutScene = ({ classes, layout }) =>
  <div className={classes.root} style={{ backgroundImage: `url(${layout.background})` }}>
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
    <Drawer />
    <Alert />
  </div>

LayoutScene.propTypes = {
  classes: object.isRequired,
  layout: object.isRequired,
}

export default withTheme(withStyles(styles)(connector(LayoutScene)))
