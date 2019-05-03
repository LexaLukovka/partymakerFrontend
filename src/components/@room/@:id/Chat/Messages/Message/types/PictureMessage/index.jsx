import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import PictureModal from './PictureModal'
import StatusCaption from '../StatusCaption'

const styles = {
  root: {
    padding: 15,
    width: 300,
    height: 300,
    backgroundSize: 'cover',
    borderRadius: 20,
  },
}

class PictureMessage extends Component {
  state = {
    isPictureModalOpen: false
  }

  openPictureModal = () => {
    this.setState({ isPictureModalOpen: true, })
  }

  closePictureModal = () => {
    this.setState({ isPictureModalOpen: false, })
  }

  render() {
    const { classes, message } = this.props
    const { isPictureModalOpen } = this.state

    return (
      <>
        <div
          onClick={this.openPictureModal}
          className={classes.root}
          style={{ backgroundImage: `url(${message.asset.url})` }}
        />
        <PictureModal
          url={message.asset.url}
          isOpen={isPictureModalOpen}
          onClose={this.closePictureModal}
        />
        <StatusCaption message={message} />
      </>
    )
  }
}

PictureMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired
}

export default withStyles(styles)(PictureMessage)
