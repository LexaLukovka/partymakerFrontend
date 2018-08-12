import React from 'react'
import PropTypes from 'prop-types'
import initialsFromUsername from 'utils/initialsFromUsername'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Avatar, List, ListItem, ListItemText, Typography, Grid } from '@material-ui/core'
import SettingsApplications from 'mdi-react/SettingsApplicationsIcon'
import MoveToInbox from 'mdi-react/MoveToInboxIcon'
import ExitToApp from 'mdi-react/ExitToAppIcon'
import Search from 'mdi-react/SearchIcon'
import Person from 'mdi-react/PersonIcon'
import Background from './Background'
import connector from './connector'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  user: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 200,
    padding: 10,
    color: 'white',
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
})

const DrawerMenu = ({ classes, actions, auth }) =>
  <Background className={classes.root}>
    {auth.user &&
    <Grid className={classes.user}>
      <div className={classes.name}>
        <Avatar className={classes.avatar} src={auth.user.avatar_url}>
          {auth.user.avatar_url ? null : initialsFromUsername(auth.user.name)}
        </Avatar>
        <div>
          <Typography color="inherit">
            {auth.user.name}
          </Typography>
          <Typography color="inherit">
            {auth.user.email}
          </Typography>
        </div>
      </div>
    </Grid>}
    {!auth.user && <div className={classes.list} />}
    <List component="nav">
      <ListItem button divider component={Link} to="/parties/create">
        <MoveToInbox />
        <ListItemText>Новая вечеринка</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/places">
        <Search />
        <ListItemText>Искать места</ListItemText>
      </ListItem>
      <ListItem button divider component={Link} to="/parties">
        <Search />
        <ListItemText>Искать вечеринки</ListItemText>
      </ListItem>
      {auth.user &&
      <ListItem button component={Link} to="/user/parties">
        <Person />
        <ListItemText>Мои вечеринки</ListItemText>
      </ListItem>}

      {auth.user &&
      <ListItem button component={Link} to="/user">
        <Person />
        <ListItemText>Мой профиль</ListItemText>
      </ListItem>}

      {auth.user &&
      <ListItem button divider component={Link} to="/settings">
        <SettingsApplications />
        <ListItemText>Настройки</ListItemText>
      </ListItem>}

      {auth.user &&
      <ListItem button onClick={() => actions.auth.logout()}>
        <ExitToApp />
        <ListItemText>Выйти</ListItemText>
      </ListItem>}

    </List>
  </Background>

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(connector(DrawerMenu)))
