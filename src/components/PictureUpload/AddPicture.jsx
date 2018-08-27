import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Icon, Avatar, CircularProgress } from '@material-ui/core'

const styles = () => ({
  root: {
    margin: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    width: 70,
    color: 'rgba(0,0,0,0.8)',
    height: 70,
    border: '2px solid rgba(0,0,0,0.8)',
    borderRadius: 3,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
})

const AddPicture = ({ classes, loadingPicture, percent, ...props }) =>
  <Avatar {...props} className={classes.root} src={loadingPicture}>
    {percent ? <CircularProgress variant="determinate" value={percent} /> : <Icon>add</Icon>}
  </Avatar>

AddPicture.propTypes = {
  classes: PropTypes.object.isRequired,
  loadingPicture: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
}

export default withStyles(styles)(AddPicture)
