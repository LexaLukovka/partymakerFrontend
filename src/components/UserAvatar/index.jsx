import React, { Component } from 'react'
import { object, shape, string } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'
import initialsFromUsername from 'utils/initialsFromUsername'
import connector from './connector'

const styles = {
  root: {
    width: 60,
    height: 60,
  },
}

class UserAvatar extends Component {
  showFullAvatar = () => {
    const { actions, user } = this.props
    if (user.avatar_url) {
      actions.pictureModal.show(user.avatar_url)
    }
  }

  render() {
    const { classes, user } = this.props
    return (
      <Avatar className={classes.root} src={user.avatar_url} onClick={this.showFullAvatar}>
        {user.avatar_url ? null : initialsFromUsername(user.name)}
      </Avatar>
    )
  }
}

UserAvatar.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  user: shape({
    avatar_url: string,
    name: string,
  }).isRequired,
}

export default withStyles(styles)(connector(UserAvatar))
