import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItemText, Paper, Typography, Divider } from '@material-ui/core'
import ListItem from './ListItem'

const styles = {
  root: {
    padding: 15,
  },
}

const SettingsCard = ({ classes, user }) =>
  <Paper className={classes.root}>
    {console.log(user)}
    <Typography align="center" variant="display1">Общие</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Имя и фамилия" secondary={user.name} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Email" secondary={user.email} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Номер телефона" secondary={user.phone} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Сменить пароль" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Сменить аватар" />
      </ListItem>
      <Divider />
    </List>
  </Paper>

SettingsCard.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(SettingsCard)
