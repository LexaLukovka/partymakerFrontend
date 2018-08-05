import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Alert from 'components/Alert'
import Drawer from 'components/Drawer'
import Container from 'components/Container'
import AuthRoute from 'components/@auth/AuthRoute'

import IndexScene from './@index/IndexScene'
import SettingsScene from './@settings/SettingsScene'
import CreateLayout from './@patry-create/CreateLayout'
import PartiesScene from './@parties/PartiesScene'
import PartyScene from './@party/PartyScene'
import AuthLayout from './@auth/AuthLayout'
import connector from './connector'

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
        <AuthRoute exact path="/settings" component={SettingsScene} />
        <AuthRoute path="/party/create" component={CreateLayout} />
        <Route exact path="/parties" component={PartiesScene} />
        <Route exact path="/parties/:id" component={PartyScene} />
        <Route path="/" component={AuthLayout} />
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
