/* eslint-disable no-console */
import React from 'react'
import { object, number, string, array, shape } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ReactStars from 'react-stars'
import { Typography, Button } from '@material-ui/core'
import AddIcon from 'mdi-react/AddIcon'
import LocationIcon from 'mdi-react/LocationIcon'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    position: 'relative',
    padding: 15,
    paddingTop: 25,
    background: theme.palette.primary.main,
    color: 'white',
  },

  rating: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
  },
  rating_number: {
    fontSize: '18px',
    padding: '0 5px',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
  },
  floatingButton: {
    position: 'absolute',
    top: -27,
    right: 15,
  },
})

const ratingChanged = (newRating) => {
  console.log(newRating)
}

const PlaceCard = ({ classes, place }) =>
  <section className={classes.root}>
    <Link to={`/parties/create?place_id=${place.id}`}>
      <Button
        variant="fab"
        color="default"
        className={classes.floatingButton}
        aria-label="Add"
      >
        <AddIcon />
      </Button>
    </Link>
    <div className={classes.location}>
      <LocationIcon />
      <Typography color="inherit" variant="subheading">
        {place.address.address}
      </Typography>
    </div>
    <Typography
      color="inherit"
      variant="title"
      className={classes.title}
    >
      {place.title}
    </Typography>

    <div className={classes.rating}>
      <Typography color="inherit" className={classes.rating_number}> 3.7 </Typography>
      <ReactStars
        count={5}
        value={3.7}
        onChange={ratingChanged}
        size={32}
        color2="#ffd700"
      />
    </div>

    <Typography color="inherit">
      {place.description}
    </Typography>
  </section>

PlaceCard.propTypes = {
  classes: object.isRequired,
  place: shape({
    admin: object.isRequired,
    title: string.isRequired,
    address: shape({
      address: string.isRequired,
    }).isRequired,
    telegram_url: string.isRequired,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(PlaceCard)
