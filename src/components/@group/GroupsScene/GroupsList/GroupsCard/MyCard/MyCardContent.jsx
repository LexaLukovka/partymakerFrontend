import React from 'react'
import { number, object, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { CardContent, List, ListItemSecondaryAction, Typography, withStyles } from '@material-ui/core'
import ListItem from './List/ListItem'
import shortTitle from 'utils/shortTitle'
import moment from 'moment'

const styles = {
  cardContent: {
    paddingTop: 0,
    marginTop: -15,
  },
  title: {
    paddingTop: 20,
  },
  create: {
    paddingBottom: 10,
  },
  picture: {
    width: '100%',
    height: 200,
    paddingBottom: 20,
    borderRadius: 5,
  },
  list: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: '14pt',
  },
  listPrimary: {
    fontSize: '14pt',
    lineHeight: '1rem',
  },
}

const MyCardContent = ({ classes, group }) =>
  <CardContent className={classes.cardContent}>
    <List className={classes.list}>
      <Link to={`/group/${group.id}`}>
        <Typography variant="headline" className={classes.title}>
          {group.title}
        </Typography>
        <ListItem>
          <Typography variant="caption" className={classes.create}>{moment(group.updated_at).fromNow()}</Typography>
        </ListItem>
      </Link>
      {group.place &&
      <ListItem>
        <Typography variant="subheading">Место:</Typography>
        <ListItemSecondaryAction>
          <Link to={`/places/${group.place.id}`}>
            <Typography variant="subheading" color="primary">{group.place.title}</Typography>
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
      }
      {group.event &&
      <ListItem>
        <Typography variant="subheading">Событие:</Typography>
        <ListItemSecondaryAction>
          <Link to={`/events/${group.event.id}`}>
            <Typography variant="subheading" color="primary">{group.event.title}</Typography>
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
      }
      {group.address &&
      <ListItem>
        <Typography variant="subheading">Адрес:</Typography>
        <ListItemSecondaryAction>
          <Typography variant="subheading">{shortTitle(group.address.address)}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      }
      <ListItem>
        <Typography variant="subheading">Приходить:</Typography>
        <ListItemSecondaryAction>
          <Typography variant="subheading">{moment(new Date(group.date)).fromNow()}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>

    <Typography paragraph>
      {group.description}
    </Typography>

  </CardContent>

MyCardContent.propTypes = {
  classes: object.isRequired,
  group: shape({
    id: number,
    address: object,
    place: object,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(MyCardContent)
