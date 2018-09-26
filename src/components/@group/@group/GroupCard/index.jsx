import React from 'react'
import { object, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import {
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core'
import connector from '../connector'
import shortTitle from 'utils/shortTitle'
import EditIcon from './EditIcon'

const styles = theme => ({
  root: {
    marginBottom: 15,
    padding: 15,
    margin: '0 auto',
    maxWidth: 500,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    color: theme.palette.primary.main,
    width: '45%',
    textAlign: 'right',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  chip: {
    background: theme.palette.primary.main,
    color: 'white',
    marginLeft: 10,
  },
  status: {
    width: 17,
    height: 17,
    background: theme.palette.primary.main,
    borderRadius: '50%',
  },
})

const GroupCard = ({ classes, auth, group }) =>
  <Paper className={classes.root}>
    <div className={classes.title}>
      <div className={classes.flex}>
        <Typography align="center" variant="title">{group.title}</Typography>
      </div>
      <EditIcon visible={auth.user && auth.user.id === group.admin_id} group={group} />
    </div>
    <List>
      <ListItem disableGutters>
        <div className={classes.status} />
        <ListItemText primary={group.status} />
        <ListItemSecondaryAction className={classes.amount}>
          <Link to={`/users/${group.admin.id}`}>
            {group.admin.name}
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
      {group.place &&
        <ListItem disableGutters>
          <ListItemText primary="Место" />
          <ListItemSecondaryAction>
            <Link to={`/places/${group.place.id}`}>
              <Typography color="primary">{group.place.title}</Typography>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
      }
      {group.event &&
        <ListItem disableGutters>
          <ListItemText primary="Событие" />
          <ListItemSecondaryAction>
            <Link to={`/events/${group.event.id}`}>
              <Typography color="primary">{group.event.title}</Typography>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
      }
      {group.address &&
        <React.Fragment>
          <ListItem disableGutters>
            <ListItemText primary="Адрес" secondary={shortTitle(group.address.address)} />
            <ListItemSecondaryAction>
              <a href={`http://www.google.com/maps/?q=${group.address.address}`}>
                <Button size="small" color="primary">на карте</Button>
              </a>
            </ListItemSecondaryAction>
          </ListItem>
        </React.Fragment>
      }
      <ListItem disableGutters>
        <ListItemText
          primary="Приходить"
          secondary={moment(new Date(group.date)).fromNow()}
        />
      </ListItem>
      <ListItem disableGutters>
        <ListItemText
          primary="Собирается"
          secondary="уже 10 человек"
        />
        <ListItemSecondaryAction>
          <Link to={`/group/${group.id}/users`}>
            <Button size="small" color="primary">участники</Button>
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText primary="Описание" secondary={group.description} />
      </ListItem>
    </List>
  </Paper>

GroupCard.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  group: shape({
    admin: object.isRequired,
    title: string.isRequired,
    address: object,
    place: object,
    event: object,
    date: string.isRequired,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(connector(GroupCard))
