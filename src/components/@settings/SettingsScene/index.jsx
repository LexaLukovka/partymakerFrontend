import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItemText } from '@material-ui/core'
import ListItem from './ListItem'
import connector from '../connector'

const styles = {}

const SettingsScene = ({ classes, user }) =>
  <List>
    <ListItem to="/settings/name">
      <ListItemText primary="Имя и фамилия" secondary={user.name} />
    </ListItem>
    <ListItem to="/settings/email">
      <ListItemText primary="Email" secondary={user.email} />
    </ListItem>
    <ListItem to="/settings/phone">
      <ListItemText primary="Номер телефона" secondary={user.phone} />
    </ListItem>
    <ListItem to="/settings/password">
      <ListItemText primary="Сменить пароль" />
    </ListItem>
    <ListItem to="/settings/avatar">
      <ListItemText primary="Сменить аватар" />
    </ListItem>
  </List>

SettingsScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(SettingsScene))
