import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import MoveToInbox from '@material-ui/icons/es/MoveToInbox'
import Search from '@material-ui/icons/es/Search'
import Person from '@material-ui/icons/es/Person'
import Typography from '@material-ui/core/es/Typography/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'
import Settings from '@material-ui/icons/es/SettingsApplicationsRounded'
import Background from './Background'
import connector from './connector'
import ExitToApp from '@material-ui/icons/es/ExitToApp'
import { Link, withRouter } from 'react-router-dom'

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
      <ListItem button divider component={Link} to="/party/create">
        <MoveToInbox />
        <ListItemText>Новая вечеринка</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component={Link} to="/parties">
        <Search />
        <ListItemText>Искать вечеринки</ListItemText>
      </ListItem>
      {auth.user &&
      <ListItem button component={Link} to={`/user/${auth.user.id}/parties`}>
        <Person />
        <ListItemText>Мои вечеринки</ListItemText>
      </ListItem>}
      <ListItem button component={Link} to="/settings">
        <Settings />
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
