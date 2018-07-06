/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus, function-paren-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/es/Modal/Modal'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import CargoBadge from '../../../CargoBadges/CargoBadge'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  photo: {
    cursor: 'pointer',
    borderRadius: '5%',
    margin: 2,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
})

class PictureCargoBadge extends React.Component {
  state = {
    open: false,
    clickedId: 0,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    let { pictures } = this.props

    pictures = pictures ? pictures : []

    return (
      <div>
        <CargoBadge
          label="фото"
          value={pictures.map((img, index) =>
            <div key={index}>
              <Avatar
                onClick={() => this.setState({ open: true, clickedId: index })}
                className={classes.photo}
                src={img.url}
              />
            </div>,
          )}
        />

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <img alt="" src={pictures.length ? pictures[this.state.clickedId].url : null} width="100%" />
          </div>
        </Modal>
      </div>
    )
  }
}

PictureCargoBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
}

export default withStyles(styles)(PictureCargoBadge)
