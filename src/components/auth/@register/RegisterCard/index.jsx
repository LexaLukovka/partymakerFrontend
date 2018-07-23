import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import RegisterForm from './RegisterForm'
import AdditionalLogin from '../../authComponent/AdditionalLogin'

const styles = theme => ({
  rootCard: {
    width: '90%',
    marginTop: 20,
    '@media only screen and (max-width: 320px)': {
      marginTop: 0,
    },
  },
  rootOther: {
    width: '90%',
  },
  party: {
    marginTop: 20,
    color: 'white',
    textShadow: '5px 10px 10px #2A2929',
    '@media only screen and (max-width: 320px)': {
      marginTop: 0,
    },
  },
})

const RegisterCard = ({ classes }) =>
  <Grid container justify="center">
    <Typography variant="display2" className={classes.party}>Partymaker</Typography>
    <div className={classes.rootCard}>
      <RegisterForm />
    </div>
    <div className={classes.rootOther}>
      <AdditionalLogin />
    </div>
  </Grid>

RegisterCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterCard)
