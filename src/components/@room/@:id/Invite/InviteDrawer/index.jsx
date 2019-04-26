import React from 'react'
import { object, func, bool, node } from 'prop-types'
import { Drawer, withStyles } from '@material-ui/core'

const styles = {
  root: {},
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 25,
    minHeight: 400,
  }
}

const InviteDrawer = ({ classes, isOpen, onClose, children }) =>
  <Drawer
    anchor="right"
    className={classes.root}
    open={isOpen}
    onClose={onClose}
  >
    {children}
  </Drawer>

InviteDrawer.propTypes = {
  classes: object.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(InviteDrawer)
