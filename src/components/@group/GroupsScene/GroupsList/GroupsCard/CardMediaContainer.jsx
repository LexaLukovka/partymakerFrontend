import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    minHeight: 50,
  },

  title: {
    padding: 10,
  },
}

const CardMediaContainer = ({ classes, group }) =>
  <div className={classes.root}>
    <Typography align="center" variant="title" className={classes.title}>
      {group.title}
    </Typography>
  </div>

CardMediaContainer.propTypes = {
  classes: object.isRequired,
  group: object.isRequired,
}

export default withStyles(styles)(CardMediaContainer)
