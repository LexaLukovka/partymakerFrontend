import React, { Component } from 'react'
import { number } from 'prop-types'
import { IconButton, SvgIcon, withStyles } from '@material-ui/core'
import PersonAddIcon from 'mdi-react/PersonAddIcon'
import InviteDialog from './InviteDialog'

const styles = {
  root: {},
}

class InviteButton extends Component {
  state = {
    isDialogOpen: false
  }

  open = () => {
    this.setState({ isDialogOpen: true })
  }

  close = () => {
    this.setState({ isDialogOpen: false })
  }

  render() {
    const { room_id } = this.props
    const { isDialogOpen } = this.state

    if (!room_id) return null

    return <>
      <IconButton onClick={this.open}>
        <SvgIcon color="primary">
          <PersonAddIcon />
        </SvgIcon>
      </IconButton>
      <InviteDialog
        room_id={room_id}
        isOpen={isDialogOpen}
        onClose={this.close}
      />
    </>
  }
}

InviteButton.propTypes = {
  room_id: number,
}

export default withStyles(styles)(InviteButton)
