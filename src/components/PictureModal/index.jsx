import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Modal, Button } from '@material-ui/core'
import connector from './connector'
import CloseIcon from 'mdi-react/CloseIcon'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    '&:focus': {
      outline: 'none',
    },
  },
  relativeContainer: {
    position: 'relative',
    padding: 5,
    [theme.breakpoints.up('sm')]: {
      padding: 15,
    },
  },
  closeIcon: {
    display: 'none',
    width: 40,
    height: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '100%',
    top: -15,
    right: -15,
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  picture: {
    maxWidth: window.innerWidth - 20,
  },
})

class PictureModal extends React.Component {
  handleClose = () => {
    this.props.actions.pictureModal.hide()
  }

  render() {
    const { classes, isOpen, picture_url } = this.props
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={this.handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <div className={classes.relativeContainer}>
            <Button
              onClick={this.handleClose}
              className={classes.closeIcon}
              variant="fab"
              aria-label="Close"
            >
              <CloseIcon />
            </Button>
            <img className={classes.picture} alt="modal" src={picture_url} />
          </div>
        </div>
      </Modal>
    )
  }
}

PictureModal.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  picture_url: PropTypes.string.isRequired,
}

const SimpleModalWrapped = withStyles(styles)(PictureModal)

export default connector(SimpleModalWrapped)
