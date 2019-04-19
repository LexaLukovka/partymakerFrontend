import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles, Button } from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newEvent: {
    textAlign: 'center',
    maxWidth: 250,
  },
  caption: {
    marginBottom: 15,
  }
}

const Events = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.newEvent}>
      <Typography className={classes.caption} gutterBottom color="textSecondary">
        Вы пока не являетесь участником ни одного мероприятия
      </Typography>
      <Button variant="contained" color="primary">
        создать событие
      </Button>
    </div>

  </div>

Events.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Events)
