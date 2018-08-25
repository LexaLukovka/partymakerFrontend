import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import SettingsScene from './SettingsScene'
import PasswordScene from './@password/PasswordScene'
import NameScene from './@name/NameScene'
import EmailScene from './@email/EmailScene'
import PhoneScene from './@phone/PhoneScene'

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
        <Route exact path="/settings/password" component={PasswordScene} />
      </Switch>
    </div>
  )
}

SettingsLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(SettingsLayout)
