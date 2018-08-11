import React from 'react'
import { object, shape } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import PartiesScene from './@parties/PartiesScene'
import PartyScene from './@parties/@party/PartyScene'
import UserScene from './UserScene'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100%',
  },
})

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
          <Route exact path="/user/parties" component={PartiesScene} />
          <Route exact path="/user/parties/:id" component={PartyScene} />
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
