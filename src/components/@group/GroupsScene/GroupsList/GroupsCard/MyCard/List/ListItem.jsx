import React from 'react'
import { object, node } from 'prop-types'
import { ListItem, withStyles } from '@material-ui/core'

const styles = {
  root: {
    paddingTop: 5,
    paddingBottom: 5,
  },
}

const MyListItem = ({ classes, children, ...props }) =>
  <ListItem {...props} disableGutters className={classes.root}>
    {children}
  </ListItem>

MyListItem.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(MyListItem)
