import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = {
  root: {
    background: 'rgb(0,0,0,0.5)',
    height: 250,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    paddingTop: 60,
  },
  whiteText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  pinkText: {
    color: '#BE05C5',
    textTransform: 'uppercase',
    fontSize: '50pt',
  },
}

const Jumbotron = ({ classes }) =>
  <div className={classes.root}>
    <div>
      <Typography align="center" className={classes.whiteText} variant="title">
        Соберем вечеринку
      </Typography>
      <Typography align="center" className={classes.pinkText}>
        вместе
      </Typography>
    </div>
  </div>

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Jumbotron)
