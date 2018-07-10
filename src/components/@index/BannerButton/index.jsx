import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'

const styles = {
  root: {
    width: 300,
    marginTop: 100,
  },
  button: {
    color: 'white',
    background: 'linear-gradient(#BE05C5 30%, #9306BC 90%)',
    marginTop: '1rem',
  },
}

const BannerButton = ({ classes }) =>
  <div>
    <Grid item className={classes.root}>
      <Link to="/cargo">
        <Button className={classes.button} fullWidth variant="raised">Планирую вечеринку</Button>
      </Link>
    </Grid>
    <Grid item>
      <Link to="/cargo/create">
        <Button className={classes.button} fullWidth variant="raised">хочу на вечеринку</Button>
      </Link>
    </Grid>
  </div>

BannerButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BannerButton)
