import React, { Component } from 'react'
import { bool, object, func } from 'prop-types'
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core'
import Asset from 'api/Asset'
import CancelButton from './CancelButton'
import ConfirmButton from './ConfirmButton'
import DialogPicture from './DialogPicture'

class ClipboardImageDialog extends Component {

  state = {
    isLoading: false,
  }

  uploadAttachment = async () => {
    const { file, onClose, onConfirm } = this.props
    this.setState({ isLoading: true })

    try {
      const asset = await Asset.create(file)
      onConfirm(asset)
    } catch (e) {
      onClose()
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { isOpen, file, onClose } = this.props
    const { isLoading } = this.state

    if (!isOpen) return null

    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Ваше сообщение</DialogTitle>
        <DialogPicture file={file} />
        <DialogActions>
          <CancelButton onClick={onClose} />
          <ConfirmButton
            isLoading={isLoading}
            onClick={this.uploadAttachment}
          />
        </DialogActions>
      </Dialog>
    )
  }
}

ClipboardImageDialog.propTypes = {
  isOpen: bool.isRequired,
  file: object,
  onClose: func.isRequired,
  onConfirm: func.isRequired,
}

ClipboardImageDialog.defaultProps = {
  file: null,
}

export default ClipboardImageDialog
