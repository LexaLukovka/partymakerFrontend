import React from 'react'
import { object } from 'prop-types'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  withStyles,
} from '@material-ui/core'

import { Link } from 'react-router-dom'

const styles = {
  root: {
    margin: '15px 10px',
  },
  media: {
    width: '100%',
    height: 300,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
}

const EventCard = ({ classes, event }) =>
  <Card className={classes.root}>
    <CardHeader
      title={event.title}
      subheader={event.address.address}
    />
    <CardMedia
      className={classes.media}
      image={event.pictures[0].url}
      title={event.title}
    />
    <CardContent>
      <div className={classes.container}>
        <div>
          <Typography variant="subheading">Когда?</Typography>
          <Typography color="textSecondary">{event.date}</Typography>
        </div>
        <div>
          <Typography variant="subheading">Сколько стоит?</Typography>
          <Typography color="textSecondary">{event.price}</Typography>
        </div>
      </div>

      <Typography component="p">
        {event.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/events/${event.id}`}><Button color="primary">Смотреть</Button></Link>
    </CardActions>
  </Card>

EventCard.propTypes = {
  classes: object.isRequired,
  event: object.isRequired,
}

export default withStyles(styles)(EventCard)
