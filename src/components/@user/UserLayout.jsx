import React from 'react'
import { object, shape } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import { isEmpty } from 'lodash'
import MyPartiesScene from './@parties/MyPartiesScene'
import UserScene from './UserScene'
import connector from './connector'

const styles = {
  root: {},
}

class UserLayout extends React.Component {
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
          <Route exact path="/user" component={UserScene} />
          <Route exact path="/user/parties" component={MyPartiesScene} />
        </Switch>
      </div>
    )
  }
}


UserLayout.propTypes = {
  classes: object.isRequired,
  actions: shape({
    header: object,
  }).isRequired,
}

export default withStyles(styles)(connector(UserLayout))
