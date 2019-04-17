import React from 'react'
import { object, func } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import AccountCircleIcon from 'mdi-react/AccountCircleIcon'

const styles = (theme) => ({
  icon: {
    color: theme.palette.secondary.main
  },
})

const AccountButton = ({ classes, onClick }) =>
  <IconButton className={classes.root} onClick={onClick}>
    <AccountCircleIcon className={classes.icon} />
  </IconButton>

AccountButton.propTypes = {
  classes: object.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(AccountButton)
