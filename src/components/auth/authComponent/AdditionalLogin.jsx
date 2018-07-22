import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Button from '@material-ui/core/es/Button/Button'
import Divider from '@material-ui/core/es/Divider/Divider'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'

const styles = {
  root: {
    margin: '20px 8px 0 8px',
  },
  button: {
    marginTop: 20,
    '@media only screen and (max-width: 320px)': {
      marginTop: 10,
    },
  },
  flex: {
    display: 'flex',
    color: 'white',
    marginBottom: 10,
    '@media only screen and (max-width: 320px)': {
      marginBottom: 5,
    },
  },
  grid: {
    width: '35%',
    background: 'white',
    height: 2.5,
    borderRadius: '15%',
  },
  facebook: {
    width: 30,
    height: 30,
    background: 'white',
    borderRadius: '25%',
  },
  img: {
    width: 30,
    height: 30,
  },
}

const AdditionalLogin = ({ classes }) =>
  <div className={classes.root}>
    <Grid container justify="center" alignItems="center" alignContent="center" className={classes.flex}>
      <Grid className={classes.grid}>
        <Divider />
      </Grid>
      <Grid container justify="space-around" style={{ width: 80 }}>
        <Typography variant="subheading" color="inherit">ИЛИ</Typography>
      </Grid>
      <Grid className={classes.grid}>
        <Divider />
      </Grid>
    </Grid>
    <Button
      fullWidth
      variant="raised"
      type="submit"
      color="primary"
    >
      <Grid container justify="flex-start">
        <img alt="" src="../../../styles/images/google-logo.svg" className={classes.img} />
        <Icon className={classes.icon} color="inherit">
          Google
        </Icon>
      </Grid>
      <Grid container justify="center">
        Google
      </Grid>
      <Grid container justify="flex-end" />
    </Button>
    <Button
      fullWidth
      className={classes.button}
      variant="raised"
      type="submit"
      color="primary"
    >
      <Grid container justify="flex-start">
        <div className={classes.facebook}>
          <img alt="" src="../../../styles/images/facebook-logo.svg" className={classes.img} />
        </div>
        <Icon className={classes.icon} color="inherit">
          Facebook
        </Icon>
      </Grid>
      <Grid container justify="center">
        Facebook
      </Grid>
      <Grid container justify="flex-end" />
    </Button>
  </div>

AdditionalLogin.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AdditionalLogin)
