import React, { Component } from 'react'
import { object, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import Header from 'components/modules/Header'
import connector from './connector'

const styles = {
  root: {},
}

class HomeScene extends Component {
  render() {
    const { classes, actions, user } = this.props

    return (
      <div className={classes.root}>
        <Header user={user} onLogout={actions.logout} />
      </div>
    )
  }
}

HomeScene.propTypes = {
  classes: object.isRequired,
  user: userShape,
  actions: shape({
    logout: func.isRequired,
  })
}

HomeScene.defaultProps = {
  user: null
}

export default withStyles(styles)(connector(HomeScene))
