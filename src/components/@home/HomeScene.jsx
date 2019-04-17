import React, { Component } from 'react'
import { object, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import connector from './connector'
import HomeHeader from './HomeHeader'
import UserMenu from './HomeHeader/UserMenu'

const styles = {
  root: {},
}

class HomeScene extends Component {
  render() {
    const { classes, actions, user } = this.props

    return (
      <div className={classes.root}>
        <HomeHeader>
          <UserMenu user={user} onLogout={actions.logout} />
        </HomeHeader>
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
