import React from 'react'
import { array, object } from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import initialsFromUsername from 'utils/initialsFromUsername'

const styles = () => ({
  users: {
    marginLeft: 10,
  },
})

const MembersScene = ({ classes, users, auth }) =>
  <div>
    <List>
      <Typography variant="subheading" className={classes.users}>УЧАСТНИКИ:</Typography>
      {users.map(user =>
        <ListItem component={Link} to={`/users/${user.id}`} button key={user.id}>
          <Avatar src={user.avatar_url}>{user.avatar_url ? null : initialsFromUsername(user.name)}</Avatar>
          <ListItemText
            primary={user.name}
            secondary={(user.id === auth.id) ? 'Организатор' : 'Участник'}
          />
        </ListItem>)
      }
    </List>
  </div>

MembersScene.propTypes = {
  classes: object.isRequired,
  users: array.isRequired,
  auth: object.isRequired,
}

export default withStyles(styles)(MembersScene)
