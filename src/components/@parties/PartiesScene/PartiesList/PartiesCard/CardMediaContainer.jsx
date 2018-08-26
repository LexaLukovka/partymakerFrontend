import React from 'react'
import { object } from 'prop-types'
import { Typography, CardMedia, withStyles } from '@material-ui/core'

const styles = {
  root: {
    minHeight: 50,
    position: 'relative',
  },

  media: {
    height: 250,
    background: '#ccc',
  },

  title: {
    position: 'absolute',
    background: 'rgba(0,0,0,0.4)',
    bottom: 0,
    left: 0,
    right: 0,
    color: 'white',
    padding: 10,
  },
}

const CardMediaContainer = ({ classes, party }) =>
  <div className={classes.root}>
    <CardMedia
      className={classes.media}
      image={party.pictures.length !== 0 ? party.pictures[0].url : 'no data'}
    />
    <Typography align="center" variant="title" className={classes.title}>
      {party.title}
    </Typography>
  </div>

CardMediaContainer.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(CardMediaContainer)
