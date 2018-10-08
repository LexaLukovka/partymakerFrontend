import React from 'react'
import { bool, object, shape, string } from 'prop-types'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import truncate from 'lodash/truncate'

const styles = () => ({
  root: {
    maxWidth: 370,
    margin: '10px 10px',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  media: {
    height: 250,
  },
})

const PlacesCard = ({ classes, place, canSelect }) =>
  <Card className={classes.root}>
    <Link to={`/places/${place.id}`}>
      <CardMedia
        className={classes.media}
        image={place.pictures[0]}
        title={place.title}
      />
    </Link>
    <CardContent>
      <Link to={`/places/${place.id}`}>
        <Typography gutterBottom variant="headline" component="h2">
          {place.title}
        </Typography>
      </Link>
      <Typography component="p">
        {truncate(place.description, { length: 200 })}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/places/${place.id}`}>
        <Button color="primary">
          Смотреть
        </Button>
      </Link>
      {canSelect &&
      <Grid container justify="flex-end">
        <Link to={`/group/create?place_id=${place.id}`}>
          <Button color="primary">
            Выбрать
          </Button>
        </Link>
      </Grid>
      }
    </CardActions>
  </Card>

PlacesCard.propTypes = {
  classes: object.isRequired,
  canSelect: bool.isRequired,
  place: shape({
    title: string,
    primary_picture: string,
    description: string,
  }).isRequired,
}

export default withStyles(styles)(PlacesCard)
