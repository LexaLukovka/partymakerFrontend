import React, { Component } from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import isPicture from 'utils/isPicture'
import PictureModal from './PictureModal'

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
    const { classes, url } = this.props
    const { isPictureModalOpen } = this.state

    if (!isPicture(url)) return null

    return (
      <>
        <div
          onClick={this.openPictureModal}
          className={classes.root}
          style={{ backgroundImage: `url(${url})` }}
        />
        <PictureModal
          url={url}
          isOpen={isPictureModalOpen}
          onClose={this.closePictureModal}
        />
      </>

    )
  }
}

PictureMessage.propTypes = {
  classes: object.isRequired,
  url: string.isRequired
}

export default withStyles(styles)(PictureMessage)
