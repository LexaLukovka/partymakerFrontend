/* eslint-disable react/sort-comp */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/es/Typography/Typography'
import Grid from '@material-ui/core/es/Grid/Grid'
import AdditionalLogin from '../../authComponent/AdditionalLogin'
import LoginForm from './LoginForm'

const styles = theme => ({
  rootCard: {
    width: '90%',
    marginTop: 90,
    '@media only screen and (max-width: 375px)': {
      marginTop: 50,
    },
    '@media only screen and (max-width: 320px)': {
      marginTop: 15,
    },
  },
  rootOther: {
    marginTop: 20,
    width: '90%',
    '@media only screen and (max-width: 320px)': {
      marginTop: 0,
    },
  },
  party: {
    marginTop: 90,
    color: 'white',
    textShadow: '5px 10px 10px #2A2929',
    '@media only screen and (max-width: 375px)': {
      marginTop: 50,
    },
    '@media only screen and (max-width: 320px)': {
      marginTop: 20,
    },
  },
})

const LoginCard = ({ classes }) =>
  <Grid container justify="center">
    <Typography variant="display2" className={classes.party}>Partymaker</Typography>
    <div className={classes.rootCard}>
      <LoginForm />
    </div>
    <div className={classes.rootOther}>
      <AdditionalLogin />
    </div>
  </Grid>

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginCard)
