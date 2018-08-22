import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import initialsFromUsername from 'utils/initialsFromUsername'

const styles = {
  photo: {
    width: 70,
    height: 70,
    borderRadius: '5%',
    margin: 2,
  },
}

const PictureList = ({ classes, user }) =>
  <Avatar className={classes.photo} src={user.avatar_url}>
    {user.avatar_url ? null : initialsFromUsername(user.name)}
  </Avatar>

PictureList.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(PictureList)
