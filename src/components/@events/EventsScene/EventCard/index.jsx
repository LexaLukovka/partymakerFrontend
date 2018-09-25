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
    margin: '15px 10px',
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

const EventCard = ({ classes, event, isChoose }) =>
  <Card className={classes.root}>
    <Link to={`/events/${event.id}`}>
      <CardHeader
        title={event.title}
        subheader={<Typography variant="subheading">{event.address.address}</Typography>}
      />
      <Avatar className={classes.media} alt={event.title} src={event.pictures[0].url} />
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
      <Grid container justify="flex-end">
        <Link to={`/group/create?event_id=${event.id}`}>
          {isChoose ?
            <Button color="primary">
              Выбрать
            </Button>
            :
            <Button color="primary">
              Собрать компанию
            </Button>
          }
        </Link>
      </Grid>
    </CardActions>
  </Card>

EventCard.propTypes = {
  classes: object.isRequired,
  event: object.isRequired,
  isChoose: bool.isRequired,
}

export default withStyles(styles)(EventCard)
