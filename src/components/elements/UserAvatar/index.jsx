import React, { Component } from 'react'
import { bool, object, oneOfType, number, shape, string } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import initialsFromUserName from 'utils/initialsFromUserName'
import GreenDot from './GreenDot'

const styles = () => ({
  avatar: {
    position: 'relative'
  },
  root: {
    alignSelf: 'center',
    width: 45,
    height: 45,
  },
  small: {
    width: 40,
    fontSize: 14,
    height: 40,
  },
})

class UserAvatar extends Component {
  overrides = () => {
    const { classes, small } = this.props

    return classNames({
      [classes.root]: true,
      [classes.small]: small,
    })
  }

  render() {
    const { classes, user } = this.props

    return (
      <div className={classes.avatar}>
        <Avatar className={this.overrides()} src={user.avatar_url}>
          {user.avatar_url ? null : initialsFromUserName(user.name)}
        </Avatar>
        <GreenDot is_online={user.is_online} />
      </div>
    )
  }
}

UserAvatar.propTypes = {
  classes: object.isRequired,
  small: bool,
  user: shape({
    avatar_url: string,
    name: string,
    is_online: oneOfType([bool, number]),
  }).isRequired,
}

UserAvatar.defaultProps = {
  small: false,
}

export default withStyles(styles)(UserAvatar)
