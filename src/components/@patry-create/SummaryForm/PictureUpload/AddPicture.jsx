import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/es/Icon/Icon'
import Avatar from '@material-ui/core/es/Avatar/Avatar'

const styles = {
  root: {
    margin: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    color: 'black',
    backgroundColor: 'transparent',
    height: 70,
    border: '2px solid black',
    borderRadius: 3,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
}

const AddPicture = ({ classes, ...props }) =>
  <Avatar {...props} className={classes.root}>
    <Icon>add</Icon>
  </Avatar>

AddPicture.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddPicture)
