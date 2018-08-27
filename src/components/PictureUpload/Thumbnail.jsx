import React from 'react'
import { object, number, string, array, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import CloseIcon from 'mdi-react/CloseIcon'

const styles = {
  root: {
    position: 'relative',
  },
  overlay: {
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    display: 'flex',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    '&:hover': {
      opacity: 1,
    },
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5%',

    zIndex: 1,
  },
  overlayIcon: {
    color: 'white',
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: '5%',
    margin: 2,
  },
}

const Thumbnail = ({ classes, src, onDelete }) =>
  <div className={classes.root}>
    <div className={classes.overlay}>
      <CloseIcon onClick={onDelete} className={classes.overlayIcon} />
    </div>
    <Avatar
      src={src}
      className={classes.photo}
    />
  </div>

Thumbnail.propTypes = {
  classes: object.isRequired,
  src: string.isRequired,
  onDelete: func.isRequired,
}

export default withStyles(styles)(Thumbnail)
