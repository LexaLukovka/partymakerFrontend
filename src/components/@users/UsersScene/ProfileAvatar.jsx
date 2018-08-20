import React from 'react'
import { object, string, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import initialsFromUsername from 'utils/initialsFromUsername'

const styles = {
  root: {
    width: 80,
    height: 80,
  },
}

const ProfileAvatar = ({ classes, user }) =>
  <Avatar className={classes.root} src={user.avatar_url}>
    {user.avatar_url ? null : initialsFromUsername(user.name)}
  </Avatar>

ProfileAvatar.propTypes = {
  classes: object.isRequired,
  user: shape({
    avatar_url: string,
    name: string,
  }).isRequired,
}

export default withStyles(styles)(ProfileAvatar)
