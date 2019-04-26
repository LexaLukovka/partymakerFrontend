import React, { Component } from 'react'
import { func } from 'prop-types'
import roomShape from 'shapes/room'
import { IconButton, SvgIcon, withStyles } from '@material-ui/core'
import PersonAddIcon from 'mdi-react/PersonAddIcon'
import InviteDrawer from './InviteDrawer'
import CopyLinkCard from './CopyLinkCard'
import InviteForm from './InviteForm'

const styles = {
  root: {},
}

class InviteButton extends Component {
  state = {
    isDrawerOpen: false
  }

  open = () => {
    this.setState({ isDrawerOpen: true })
  }

  close = () => {
    this.setState({ isDrawerOpen: false })
  }

  handleSubmit = (form) => {
    const { room, onUpdate, onCreate } = this.props

    if (!room.invite) return onCreate(form)

    return onUpdate(form)
  }

  render() {
    const { room } = this.props
    const { isDrawerOpen } = this.state

    if (!room) return null

    return <>
      <IconButton onClick={this.open}>
        <SvgIcon color="primary">
          <PersonAddIcon />
        </SvgIcon>
      </IconButton>
      <InviteDrawer
        isOpen={isDrawerOpen}
        onClose={this.close}
      >
        <InviteForm
          invite={room.invite}
          address={room.address}
          title={room.title}
          datetime={room.datetime}
          onSubmit={this.handleSubmit} />
        <CopyLinkCard />
      </InviteDrawer>
    </>
  }
}

InviteButton.propTypes = {
  room: roomShape,
  onCreate: func.isRequired,
  onUpdate: func.isRequired,
}

export default withStyles(styles)(InviteButton)
