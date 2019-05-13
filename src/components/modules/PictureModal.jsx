import React, { memo } from 'react'
import { object, func, bool, string } from 'prop-types'
import { withStyles, Dialog } from '@material-ui/core'

const styles = {
  root: {},
}

const PictureModal = ({ classes, url, isOpen, onClose }) =>
  <Dialog
    open={isOpen}
    onClose={onClose}
    className={classes.root}
  >
    <img alt={url} src={url} width="100%" height="100%" onClick={onClose} />
  </Dialog>

PictureModal.propTypes = {
  classes: object.isRequired,
  url: string.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
}

const isEqual = (prev, next) => {
  if (prev.url !== next.url) return false

  return prev.isOpen === next.isOpen
}

export default withStyles(styles)(memo(PictureModal, isEqual))
