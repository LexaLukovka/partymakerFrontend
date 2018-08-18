import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography/Typography'

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
}

const MyParties = ({ classes }) =>
  <React.Fragment>
    <Typography className={classes.root} align="center" variant="headline">У вас пока что нет вечеринок...</Typography>
    <Link to="/parties/create"><Typography align="center" color="primary" variant="headline">СОЗДАТЬ</Typography></Link>
  </React.Fragment>
MyParties.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(MyParties)
