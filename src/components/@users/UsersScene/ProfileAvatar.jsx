/* eslint-disable no-return-assign */
import React from 'react'
import { func, object, shape, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import UserAvatar from 'components/UserAvatar'
import AvatarUploadIcon from './AvatarUploadIcon'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  add: {
    position: 'absolute',
    bottom: -5,
    right: -5,
  },
})

const ProfileAvatar = ({ classes, user, onChangeAvatar }) =>
  <div className={classes.root}>
    <UserAvatar user={user} />
    <AvatarUploadIcon
      className={classes.add}
      onChange={onChangeAvatar}
    />
  </div>

ProfileAvatar.propTypes = {
  classes: object.isRequired,
  onChangeAvatar: func.isRequired,
  user: shape({
    avatar_url: string,
    name: string,
  }).isRequired,
}

export default withStyles(styles)(ProfileAvatar)
