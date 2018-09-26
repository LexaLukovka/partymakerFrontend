import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Avatar, Button, Typography, withStyles } from '@material-ui/core'

import moment from 'moment'

const styles = {
  root: {},
  header: {
    padding: 20,
  },
  title: {
    paddingBottom: 5,
  },
  media: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    padding: 10,
  },
}

const EventCard = ({ classes, event }) =>
  <div className={classes.root}>
    <div className={classes.header}>
      <Typography variant="title" className={classes.title}>{event.title}</Typography>
      <Typography variant="subheading">{event.address.address}</Typography>
    </div>

    <Avatar className={classes.media} alt={event.title} src={event.pictures[0].url} />

    <div className={classes.container}>
      <div>
        <Typography variant="subheading">Когда?</Typography>
        <Typography color="textSecondary">{moment(new Date(event.date)).format('Do MMMM в h:mm')}</Typography>
      </div>
      <div>
        <Typography variant="subheading">Сколько стоит?</Typography>
        <Typography color="textSecondary">{event.price}</Typography>
      </div>
    </div>
    <div className={classes.description}>
      <Typography component="p" variant="subheading">
        {event.description}
      </Typography>
    </div>
    <div className={classes.description}>
      <Link to={`/group/create?event_id=${event.id}`}>
        <Button color="primary" fullWidth variant="contained">Собрать компанию</Button>
      </Link>
    </div>
  </div>

EventCard.propTypes = {
  classes: object.isRequired,
  event: object.isRequired,
}

export default withStyles(styles)(EventCard)
