import React from 'react'
import { object, func } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import CloseIcon from 'mdi-react/CloseIcon'

const styles = {
  root: {
    marginRight: 5,
  },
}

const CloseButton = ({ classes, onClick }) =>
  <div className={classes.root}>
    <IconButton color="primary" onClick={onClick}>
      <CloseIcon />
    </IconButton>
  </div>

CloseButton.propTypes = {
  classes: object.isRequired,
  onClick: func.isRequired
}

export default withStyles(styles)(CloseButton)
