import React from 'react'
import { object, func, bool, node } from 'prop-types'
import { Drawer, withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}

const PlaceDrawer = ({ classes, isOpen, onClose, children }) =>
  <Drawer
    anchor="right"
    open={isOpen}
    onClose={onClose}
  >
    <div className={classes.root}>
      {children}
    </div>
  </Drawer>

PlaceDrawer.propTypes = {
  classes: object.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(PlaceDrawer)
