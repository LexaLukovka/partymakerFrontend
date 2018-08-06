import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { List, ListItemText, Divider } from '@material-ui/core'
import ListItem from './ListItem'
import connector from '../connector'

const styles = {}

const SettingsScene = ({ classes, user }) =>
  <div>
    <List>
      <Link to="/settings/name">
        <ListItem>
          <ListItemText primary="Имя и фамилия" secondary={user.name} />
        </ListItem>
        <Divider />
      </Link>
      <Link to="/settings/email">
        <ListItem>
          <ListItemText primary="Email" secondary={user.email} />
        </ListItem>
        <Divider />
      </Link>
      <Link to="/settings/phone">
        <ListItem>
          <ListItemText primary="Номер телефона" secondary={user.phone} />
        </ListItem>
        <Divider />
      </Link>
      <Link to="/settings/password">
        <ListItem>
          <ListItemText primary="Сменить пароль" />
        </ListItem>
        <Divider />
      </Link>
      <Link to="/settings/avatar">
        <ListItem>
          <ListItemText primary="Сменить аватар" />
        </ListItem>
        <Divider />
      </Link>
    </List>
  </div>

SettingsScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
