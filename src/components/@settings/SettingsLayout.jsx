import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SettingsScene from './SettingsCard'
import connector from './connector'
import { Route, Switch } from 'react-router-dom'
import PasswordScene from './PasswordScene'

const styles = {
  root: {
    paddingTop: 15,
    padding: 10,
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
          <Route exact path="/settings/name" />
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
