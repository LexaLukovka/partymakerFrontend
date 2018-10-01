/* eslint-disable no-return-assign */
import React from 'react'
import { bool, func, object, shape, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import UserAvatar from 'components/User/UserAvatar'
import AvatarUploadIcon from './AvatarUploadIcon'

const styles = (theme) => ({
  root: {
    marginRight: 15,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  add: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    [theme.breakpoints.up('sm')]: {
      bottom: 15,
    },
  },
})

const ProfileAvatar = ({ classes, user, visible, onChangeAvatar }) =>
  <div className={classes.root}>
    <UserAvatar user={user} />
    {visible &&
    <AvatarUploadIcon
      className={classes.add}
      onChange={onChangeAvatar}
    />
    }
  </div>

ProfileAvatar.propTypes = {
  classes: object.isRequired,
  onChangeAvatar: func.isRequired,
  visible: bool.isRequired,
  user: shape({
    avatar_url: string,
    name: string,
  }).isRequired,
}

export default withStyles(styles)(ProfileAvatar)
