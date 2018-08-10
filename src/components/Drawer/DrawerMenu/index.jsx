import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Typography, Grid } from '@material-ui/core'
import { MoveToInbox, ExitToApp, SettingsApplications, Search, Person } from '@material-ui/icons'
import Background from './Background'
import connector from './connector'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  user: {
    color: 'white',
    paddingTop: 143,
    paddingLeft: 20,
    '@media only screen and (max-width: 640px)': {
      paddingTop: 152,
    },
  },
  list: {
    paddingTop: 192,
  },
})

const DrawerMenu = ({ classes, actions, auth }) =>
  <Background className={classes.root}>
    {auth.user &&
    <Grid className={classes.user}>
      <Typography color="inherit">
        {auth.user.name}
      </Typography>
      <Typography color="inherit">
        {auth.user.email}
      </Typography>
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
      <ListItem button component={Link} to="/parties">
        <Search />
        <ListItemText>Искать вечеринки</ListItemText>
      </ListItem>
      {auth.user &&
      <ListItem button component={Link} to="/user/parties">
        <Person />
        <ListItemText>Мои вечеринки</ListItemText>
      </ListItem>
      }
      <ListItem button component={Link} to="/settings">
        <SettingsApplications />
        <ListItemText>Настройки</ListItemText>
      </ListItem>
      <ListItem button onClick={() => actions.auth.logout()}>
        <ExitToApp />
        <ListItemText>Выйти</ListItemText>
      </ListItem>
    </List>
  </Background>

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(connector(DrawerMenu)))
