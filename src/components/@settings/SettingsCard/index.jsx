import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { List, ListItemText, Divider } from '@material-ui/core'
import ListItem from './ListItem'
import connector from '../connector'

const styles = {
  root: {
    padding: 15,
  },
}

const SettingsCard = ({ classes, user }) =>
  <div className={classes.root}>
    {console.log(user)}
    <List>
      <Link to="/name">
        <ListItem>
          <ListItemText primary="Имя и фамилия" secondary={user.name} />
        </ListItem>
        <Divider />
      </Link>
      <ListItem>
        <ListItemText primary="Email" secondary={user.email} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Номер телефона" secondary={user.phone} />
      </ListItem>
      <Divider />
      <Link to="/settings/password">
        <ListItem>
          <ListItemText primary="Сменить пароль" />
        </ListItem>
        <Divider />
      </Link>
      <ListItem>
        <ListItemText primary="Сменить аватар" />
      </ListItem>
      <Divider />
    </List>
  </div>

SettingsCard.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(SettingsCard))
