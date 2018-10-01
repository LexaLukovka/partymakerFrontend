import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

import SettingsScene from './SettingsScene'
import NameScene from './SettingsScene/MobileScene/@name/NameScene'
import EmailScene from './SettingsScene/MobileScene/@email/EmailScene'
import PhoneScene from './SettingsScene/MobileScene/@phone/PhoneScene'
import InstagramScene from './SettingsScene/MobileScene/@instagram/InstagramScene'
import TelegramScene from './SettingsScene/MobileScene/@telegram/TelegramScene'
import PasswordScene from './SettingsScene/MobileScene/@password/PasswordScene'

const styles = {
  root: {},
}

function SettingsLayout(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/settings" component={SettingsScene} />
        <Route exact path="/settings/name" component={NameScene} />
        <Route exact path="/settings/email" component={EmailScene} />
        <Route exact path="/settings/phone" component={PhoneScene} />
        <Route exact path="/settings/instagram" component={InstagramScene} />
        <Route exact path="/settings/telegram" component={TelegramScene} />
        <Route exact path="/settings/password" component={PasswordScene} />
      </Switch>
    </div>
  )
}

SettingsLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(SettingsLayout)
