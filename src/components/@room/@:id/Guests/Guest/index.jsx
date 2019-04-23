import React from 'react'
import { object } from 'prop-types'
import userShape from 'shapes/user'
import { ListItem, ListItemText, withStyles } from '@material-ui/core'
import UserAvatar from 'components/elements/UserAvatar'

const styles = {
  root: {},
}

const Guest = ({ classes, guest }) =>
  <ListItem button className={classes.root}>
    <UserAvatar user={guest} />
    <ListItemText
      primary={guest.name}
      secondary={guest.status}
    />
  </ListItem>

Guest.propTypes = {
  classes: object.isRequired,
  guest: userShape.isRequired
}

export default withStyles(styles)(Guest)
