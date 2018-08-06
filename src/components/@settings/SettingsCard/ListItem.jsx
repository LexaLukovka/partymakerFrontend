import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { ListItem } from '@material-ui/core'

const styles = {
  root: {
    paddingLeft: 0,
    paddingTop: 15,
    paddingBottom: 15,
  },
}

const MyListItem = ({ classes, children, ...props }) =>
  <ListItem {...props} className={classes.root}>
    {children}
  </ListItem>

MyListItem.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(MyListItem)
