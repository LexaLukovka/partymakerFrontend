/* eslint-disable no-console */
import React from 'react'
import { object, string, shape, func, number } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import { Typography, Button } from '@material-ui/core'
import AddIcon from 'mdi-react/AddIcon'
import LocationIcon from 'mdi-react/LocationIcon'

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    color: 'white',
  },
  content: {
    padding: 15,
    paddingTop: 25,
    position: 'relative',
    maxWidth: 800,
    margin: '0 auto',
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
    paddingTop: 5,
  },
  floatingButton: {
    position: 'absolute',
    top: -27,
    right: 15,
  },
  title: {
    marginLeft: 5,
    marginBottom: 5,
  },
  locationIcon: {
    marginRight: 5,
  },
})

const PlaceCard = ({ classes, place, onVote, vote }) => {
  let voteNumber = vote || parseFloat(place.rating)
  voteNumber = voteNumber ? voteNumber.toFixed(1) : null

  return (
    <section className={classes.root}>
      <div className={classes.content}>
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

        <Typography color="inherit" variant="title" className={classes.title}> {place.title} </Typography>
        <div className={classes.location}>
          <a href={`http://www.google.com/maps/?q=${place.address.address}`}>
            <LocationIcon className={classes.locationIcon} />
          </a>
          <Typography color="inherit" variant="subheading">
            <a href={`http://www.google.com/maps/?q=${place.address.address}`}>
              {place.address.address}
            </a>
          </Typography>
        </div>

        <div className={classes.rating}>
          <Typography color="inherit" className={classes.rating_number}> {voteNumber} </Typography>
          <ReactStars
            count={5}
            value={parseFloat(voteNumber)}
            onChange={onVote}
            size={32}
            color2={vote ? '#689f38' : '#ffd700'}
          />
        </div>

        <Typography color="inherit">
          {place.description}
        </Typography>
      </div>
    </section>
  )
}

PlaceCard.propTypes = {
  classes: object.isRequired,
  vote: number,
  place: shape({
    admin: object.isRequired,
    title: string.isRequired,
    address: shape({
      address: string.isRequired,
    }).isRequired,
    telegram_url: string.isRequired,
    description: string.isRequired,
  }).isRequired,
  onVote: func.isRequired,
}

PlaceCard.defaultProps = {
  vote: null,
}

export default withStyles(styles)(PlaceCard)
