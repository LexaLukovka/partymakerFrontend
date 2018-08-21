import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography/Typography'
import Button from '@material-ui/core/Button/Button'

const styles = {
  root: {
    display: 'flex',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textAlign: 'center',
  },
}

const MyParties = ({ classes }) =>
  <div className={classes.root}>
    <div>
      <Typography align="center" variant="subheading">
        У вас пока что нет
        вечеринок...
      </Typography>
      <div className={classes.link}>
        <Link to="/parties/create"><Button color="primary" size="large">СОЗДАТЬ</Button></Link>
      </div>
    </div>
  </div>
MyParties.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(MyParties)
