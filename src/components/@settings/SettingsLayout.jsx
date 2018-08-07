import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import SettingsScene from './SettingsScene'
import PasswordScene from './@password/PasswordScene'
import NameScene from './@name/NameScene'
import EmailScene from './@email/EmailScene'
import PhoneScene from './@phone/PhoneScene'
import AvatarScene from './@avatar/AvatarScene'
import connector from './connector'

const styles = {
  root: {
    padding: 15,
  },
}

class SettingsLayout extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.setIcon('back')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Switch>
          <Route exact path="/settings" component={SettingsScene} />
          <Route exact path="/settings/name" component={NameScene} />
          <Route exact path="/settings/email" component={EmailScene} />
          <Route exact path="/settings/phone" component={PhoneScene} />
          <Route exact path="/settings/password" component={PasswordScene} />
          <Route exact path="/settings/avatar" component={AvatarScene} />
        </Switch>
      </div>
    )
  }
}


SettingsLayout.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(SettingsLayout))
