import React from 'react'
import { object, shape, string } from 'prop-types'
import { Card, Typography, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'


const styles = theme => ({
  root: {
    margin: '10px 10px',
  },
  media: {
    height: 250,
  },
})

const PlacesCard = ({ classes, place }) =>
  <Card className={classes.root}>
    <Link to={`/places/${place.id}`}>
      <CardMedia
        className={classes.media}
        image={place.primary_picture}
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
        {place.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Создать вечеринку
      </Button>
      <Button size="small" color="primary">
        Смотреть вечерики
      </Button>
    </CardActions>
  </Card>

PlacesCard.propTypes = {
  classes: object.isRequired,
  place: shape({
    title: string,
    primary_picture: string,
    description: string,
  }).isRequired,
}

export default withStyles(styles)(PlacesCard)
