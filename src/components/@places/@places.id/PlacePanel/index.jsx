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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  description: {
    lineHeight: '1.7',
  },
  badge: {
    minWidth: 100,
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
        {place.details.map((detail, index) =>
          <div key={index} className={classes.badge}>
            <Typography>{detail.label}</Typography>
            <Typography variant="caption">{detail.value}</Typography>
          </div>)}
      </div>
      <Typography
        color="inherit"
        className={classes.description}
        align="justify"
        dangerouslySetInnerHTML={{ __html: place.description }}
      />
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
