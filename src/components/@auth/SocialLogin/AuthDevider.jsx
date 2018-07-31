import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/es/Typography/Typography'


const styles = theme => ({
  root: {
    padding: '30px 0',
    display: 'flex',
    color: 'white',
  },

  takeAllSpace: {
    flex: 1,
    padding: '0 10px',
  },
})
const AuthDevider = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.takeAllSpace}>
      <hr />
    </div>
    <Typography variant="subheading" color="inherit">ИЛИ</Typography>
    <div className={classes.takeAllSpace}>
      <hr />
    </div>
  </div>

AuthDevider.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AuthDevider)
