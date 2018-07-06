/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus, function-paren-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import Modal from '@material-ui/core/es/Modal/Modal'

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
  root: {
    paddingTop: theme.spacing.size3,
    paddingBottom: theme.spacing.size3,

    display: 'flex',
  },
  photo: {
    cursor: 'pointer',
    borderRadius: '5%',
    margin: 2,
    flexBasis: '24%',
    height: 'auto',
  },

  cargoBadge: {
    display: 'flex',
  },

  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

})

class LargePictureCargoBadge extends React.Component {
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
    pictures = pictures || []
    return (
      <div className={classes.root}>
        {
          pictures.map((img, index) =>
            <Avatar
              key={index}
              onClick={() => this.setState({ open: true, clickedId: index })}
              className={classes.photo}
              src={img.url}
            />,
          )
        }

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

LargePictureCargoBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
}

export default withStyles(styles)(LargePictureCargoBadge)
