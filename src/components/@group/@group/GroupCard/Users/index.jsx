import React from 'react'
import { array, object } from 'prop-types'
import { Avatar, List, ListItem, ListItemText, Typography, withStyles } from '@material-ui/core'
import DialogUser from './DialogUser'
import initialsFromUsername from 'utils/initialsFromUsername'

const styles = () => ({
  users: {
    marginLeft: 10,
  },
})

class Users extends React.Component {
  state = {
    isOpen: false,
    people: null,
  }

  handleOpenUser = (user) => {
    this.setState({
      isOpen: true,
      people: user,
    })
  }

  handleCloseUser = () => {
    this.setState({
      isOpen: false,
      people: null,
    })
  }

  render() {
    const { classes, users } = this.props
    const { isOpen, people } = this.state
    return (
      <div>
        <List>
          <Typography variant="subheading" className={classes.users}>УЧАСТНИКИ:</Typography>
          {users.map((user, index) =>
            <React.Fragment key={user.id}>
              <ListItem button onClick={() => this.handleOpenUser(user)}>
                <Avatar src={user.avatar_url}>{user.avatar_url ? null : initialsFromUsername(user.name)}</Avatar>
                <ListItemText
                  primary={user.name}
                  secondary={(index === users.length - 1) ? 'Организатор' : 'Участник'}
                />
              </ListItem>
              <DialogUser user={people} isOpen={isOpen} close={this.handleCloseUser} />
            </React.Fragment>)
          }
        </List>
      </div>
    )
  }
}

Users.propTypes = {
  classes: object.isRequired,
  users: array.isRequired,
}

export default withStyles(styles)(Users)
