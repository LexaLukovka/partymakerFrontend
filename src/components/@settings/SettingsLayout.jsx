import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import SettingsScene from './SettingsScene'
import PasswordScene from './PasswordScene'
import NameScene from './NameScene'
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
          <Route exact path="/settings/email" />
          <Route exact path="/settings/phone" />
          <Route exact path="/settings/password" component={PasswordScene} />
          <Route exact path="/settings/avatar" />
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
