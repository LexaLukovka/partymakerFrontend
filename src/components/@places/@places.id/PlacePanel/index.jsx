/* eslint-disable no-console */
import React from 'react'
import { object, shape, string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import LocationIcon from 'mdi-react/LocationIcon'

const styles = theme => ({
  root: {
    height: '100%',
    flexGrow: 1,
    overflow: 'auto',
  },
  content: {
    padding: 15,
    position: 'relative',
    paddingTop: 20,
    [theme.breakpoints.up('md')]: {
      padding: 30,
      paddingTop: 40,
    },
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    color: '#5B0175',
  },
  locationIcon: {
    fontSize: 16,
    paddingRight: 10,

  },
  floatingButton: {
    position: 'absolute',
    top: -27,
    right: 15,
  },
  title: {
    fontWeight: 'normal',
    marginLeft: 5,
    marginBottom: 5,
  },
  whenPriceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
})

const PlacePanel = ({ classes, place }) =>
  <section className={classes.root}>
    <div className={classes.content}>
      <Typography color="inherit" variant="title" className={classes.title}> {place.title} </Typography>
      <a href={`http://www.google.com/maps/?q=${place.address.address}`}>
        <div className={classes.location}>
          <Typography color="inherit" variant="subheading" className={classes.locationIcon}>
            <LocationIcon />
          </Typography>

          <Typography color="inherit" variant="body1">
            {place.address.address}
          </Typography>
        </div>
      </a>
      <div className={classes.whenPriceContainer}>
        <div>
          <Typography>Когда?</Typography>
          <Typography variant="caption">{place.working_hours}</Typography>
        </div>
        <div>
          <Typography>Сколько стоит?</Typography>
          <Typography variant="caption">{place.price}</Typography>
        </div>
      </div>
      <Typography color="inherit" align="justify">
        {place.description}
      </Typography>
    </div>
  </section>

PlacePanel.propTypes = {
  classes: object.isRequired,
  place: shape({
    admin: object.isRequired,
    title: string.isRequired,
    address: shape({
      address: string.isRequired,
    }).isRequired,
    description: string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(PlacePanel)
