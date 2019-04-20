import React from 'react'
import { object, arrayOf } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles, List } from '@material-ui/core'
import Guest from './Guest'

const styles = {
  root: {},
}

const Guests = ({ classes, guests }) =>
  <List className={classes.root}>
    {guests.map(guest => <Guest guest={guest} />)}
  </List>

Guests.propTypes = {
  classes: object.isRequired,
  guests: arrayOf(userShape).isRequired
}

export default withStyles(styles)(Guests)
