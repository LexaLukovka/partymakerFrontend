import React, { Component } from 'react'
import { bool, object, oneOfType, number, shape, string } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import initialsFromUserName from 'utils/initialsFromUserName'
import GreenDot from './GreenDot'
import PictureModal from 'components/modules/PictureModal'

const styles = () => ({
  avatar: {
    position: 'relative',
  },
  root: {
    alignSelf: 'center',
    width: 45,
    height: 45,
    cursor: 'pointer',
  },
  small: {
    width: 40,
    fontSize: 14,
    height: 40,
  },
})

class UserAvatar extends Component {

  state = {
    isModalOpen: false,
  }

  open = () => {
    this.setState({ isModalOpen: true })
  }

  close = () => {
    this.setState({ isModalOpen: false })
  }

  overrides = () => {
    const { classes, small, className } = this.props

    return classNames({
      [classes.root]: true,
      [classes.small]: small,
      [className]: true,
    })
  }

  render() {
    const { classes, user, is_online } = this.props
    const { isModalOpen } = this.state

    return (
      <div className={classes.avatar}>
        <Avatar onClick={this.open} className={this.overrides()} src={user.avatar_url}>
          {user.avatar_url ? null : initialsFromUserName(user.name)}
        </Avatar>
        <GreenDot is_online={is_online} />
        <PictureModal
          url={user.avatar_url}
          isOpen={isModalOpen}
          onClose={this.close}
        />
      </div>
    )
  }
}

UserAvatar.propTypes = {
  classes: object.isRequired,
  className: string,
  small: bool,
  is_online: oneOfType([bool, number]),
  user: shape({
    name: string,
    avatar_url: string,
  }).isRequired,
}

UserAvatar.defaultProps = {
  small: false,
}

export default withStyles(styles)(UserAvatar)