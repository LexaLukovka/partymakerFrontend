import React from 'react'
import { object } from 'prop-types'
import { List, ListItemText } from '@material-ui/core'
import ListItem from './ListItem'

const MobileScene = ({ user }) =>
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
    <ListItem to="/settings/instagram">
      <ListItemText primary="Instagram" secondary={user.instagram} />
    </ListItem>
    <ListItem to="/settings/telegram">
      <ListItemText primary="Telegram" secondary={user.telegram} />
    </ListItem>
    <ListItem to="/settings/password">
      <ListItemText primary="Сменить пароль" />
    </ListItem>
  </List>

MobileScene.propTypes = {
  user: object.isRequired,
}

export default MobileScene
