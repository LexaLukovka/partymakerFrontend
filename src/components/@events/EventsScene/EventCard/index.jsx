import React from 'react'
import { bool, object } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core'

import shortDescriptions from 'utils/shortDescriptions'
import moment from 'moment'

const styles = {
  root: {
    maxWidth: 370,
    margin: '10px 10px',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  media: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
}

const EventCard = ({ classes, event, canSelect }) =>
  <Card className={classes.root}>
    <Link to={`/events/${event.id}`}>
      <CardHeader
        title={event.title}
        subheader={<Typography>{event.address.address}</Typography>}
      />
      <Avatar className={classes.media} alt={event.title} src={event.pictures[0]} />
    </Link>

    <CardContent>
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

      <Typography component="p">
        {shortDescriptions(event.description)}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/events/${event.id}`}>
        <Button color="primary">
          Смотреть
        </Button>
      </Link>
      {canSelect &&
      <Grid container justify="flex-end">
        <Link to={`/group/create?event_id=${event.id}`}>
          <Button color="primary">
            Выбрать
          </Button>
        </Link>
      </Grid>
      }
    </CardActions>
  </Card>

EventCard.propTypes = {
  classes: object.isRequired,
  event: object.isRequired,
  canSelect: bool.isRequired,
}

export default withStyles(styles)(EventCard)
