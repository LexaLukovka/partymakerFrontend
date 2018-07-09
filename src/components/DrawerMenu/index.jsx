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
      paddingTop: 148,
    },
  },
})

const DrawerMenu = ({ classes, auth }) =>
  <Background className={classes.root}>
    <Grid className={classes.user}>
      <Typography color="inherit">
        {auth.user.name}
      </Typography>
      <Typography color="inherit">
        {auth.user.email}
      </Typography>
    </Grid>
    <List component="nav">
      <ListItem button divider>
        <MoveToInbox />
        <ListItemText>Новая вечеринка</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button>
        <Search />
        <ListItemText>Искать вечеринки</ListItemText>
      </ListItem>
      <ListItem button>
        <Person />
        <ListItemText>Мои вечеринки</ListItemText>
      </ListItem>
    </List>
  </Background>

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(DrawerMenu))
