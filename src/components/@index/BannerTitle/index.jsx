import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/es/Typography/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'
import Background from './Background'

const styles = {
  root: {
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

const BannerTitle = ({ classes }) =>
  <Grid>
    <Background>
      <Grid container justify="center" className={classes.root}>
        <Typography className={classes.whiteText} variant="title">
          Соберем вечеринку
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Typography className={classes.pinkText}>
          вместе
        </Typography>
      </Grid>
    </Background>
  </Grid>

BannerTitle.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BannerTitle)
