import React, { Component } from 'react'
import { func, object } from 'prop-types'
import roomShape from 'shapes/room'
import matchShape from 'shapes/match'
import { withStyles } from '@material-ui/core'
import InviteDrawer from './InviteDrawer'
import InviteForm from './InviteForm'
import InviteButton from './InviteButton'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {},
}

class Invite extends Component {

  state = {
    isLoading: false,
    isDrawerOpen: false
  }

  load = async () => {
    const { room, onLoad } = this.props
    this.setState({ isLoading: true })
    const result = await onLoad(room.id)
    this.setState({ isLoading: false })

    return result
  }

  open = () => {
    this.setState({ isDrawerOpen: true })
    this.load().catch(console.error)
  }

  close = () => {
    this.setState({ isDrawerOpen: false })
  }

  handleSubmit = (form) => {
    const { room, onUpdate, onCreate } = this.props

    if (!room.invite) return onCreate(room.id, form)

    return onUpdate(room.id, form)
  }

  render() {
    const { classes, room } = this.props
    const { isDrawerOpen } = this.state

    if (!room) return null

    return (
      <div className={classes.root}>
        <InviteButton onClick={this.open} />
        <InviteDrawer
          isOpen={isDrawerOpen}
          onClose={this.close}
        >
          <InviteForm
            room={room}
            onSubmit={this.handleSubmit}
            onCancel={this.close}
          />
        </InviteDrawer>
      </div>
    )
  }
}

Invite.propTypes = {
  room: roomShape,
  classes: object.isRequired,
  onLoad: func.isRequired,
  onCreate: func.isRequired,
  onUpdate: func.isRequired,
}

export default withStyles(styles)(Invite)
