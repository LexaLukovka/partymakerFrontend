import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({

  root: {
    backgroundColor: '#09091A',
    padding: '25px 0',
    width: '100%',
    color: theme.palette.common.white,
    textAlign: 'center',
  },
})

const Footer = ({ classes }) =>
  <div className={classes.root}>
    PartyMaker 2018 ©
  </div>

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
