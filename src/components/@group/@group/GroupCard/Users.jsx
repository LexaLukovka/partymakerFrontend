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

const Users = ({ classes, users }) =>
  <div>
    <List>
      <Typography variant="subheading" className={classes.users}>УЧАСТНИКИ:</Typography>
      {users.map((user, index) =>
        <ListItem component={Link} to={`/users/${user.id}`} button key={user.id}>
          <Avatar src={user.avatar_url}>{user.avatar_url ? null : initialsFromUsername(user.name)}</Avatar>
          <ListItemText
            primary={user.name}
            secondary={(index === users.length - 1) ? 'Организатор' : 'Участник'}
          />
        </ListItem>)
      }
    </List>
  </div>

Users.propTypes = {
  classes: object.isRequired,
  users: array.isRequired,
}

export default withStyles(styles)(Users)
