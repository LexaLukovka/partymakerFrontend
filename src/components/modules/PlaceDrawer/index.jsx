import React from 'react'
import { bool, func, object } from 'prop-types'
import { Drawer, withStyles } from '@material-ui/core'
import placeShape from 'shapes/place'
import PlaceForm from './PlaceForm'

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}

const PlaceDrawer = ({ classes, place, isOpen, onSubmit, onClose }) =>
  <Drawer
    anchor="right"
    open={isOpen}
    onClose={onClose}
  >
    <div className={classes.root}>
      <PlaceForm
        place={place}
        onCancel={onClose}
        onSubmit={onSubmit}
      />
    </div>
  </Drawer>

PlaceDrawer.propTypes = {
  classes: object.isRequired,
  place: placeShape,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  onSubmit: func.isRequired,
}

export default withStyles(styles)(PlaceDrawer)
