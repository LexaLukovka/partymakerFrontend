import React, { Component } from 'react'
import { func, object, shape } from 'prop-types'
import matchShape from 'shapes/match'
import roomShape from 'shapes/room'
import { Typography, withStyles } from '@material-ui/core'
import Invite from './Invite'
import Guests from './Guests'
import Chat from './Chat'
import connector from './connector'
import Socket from 'services/Socket'
import Place from './Place'

const styles = {
  root: {
    display: 'flex',
    maxHeight: 'calc(100vh - 65px)',
    flexGrow: 1,
  },
  guests: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    borderRight: 'solid 1px rgba(0, 0, 0, 0.12)',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px 30px 20px',
  },
}

class RoomScene extends Component {

  state = {
    isRoomLoading: false,
    isGuestsLoaded: false,
  }

  componentDidMount() {
    const { match } = this.props
    Socket.subscribe(`room:${match.params.id}`)
    this.loadRoom().catch(console.error)
  }

  componentWillUnmount() {
    Socket.close()
  }

  loadRoom = async () => {
    const { actions, match } = this.props
    this.setState({ isRoomLoading: true })
    await actions.loadRoom(match.params.id)
    this.setState({ isRoomLoading: false })
  }

  sendMessage = (form) => {
    const { actions, match } = this.props

    return actions.sendMessage(match.params.id, form)
  }

  loadMessages = ({ page, limit }) => {
    const { actions, match } = this.props

    return actions.loadMessages(match.params.id, { page, limit })
  }

  loadGuests = async () => {
    const { actions, match } = this.props
    const result = await actions.loadGuests(match.params.id)
    this.setState({ isGuestsLoaded: true })

    return result
  }

  loadInvite = () => {
    const { actions, match } = this.props

    return actions.loadInvite(match.params.id)
  }

  createInvite = async (form) => {
    const { actions, match } = this.props

    return actions.createInvite(match.params.id, form)
  }

  updateInvite = async (form) => {
    const { actions, match } = this.props

    return actions.updateInvite(match.params.id, form)
  }

  loadPlace = () => {
    const { actions, match } = this.props

    return actions.loadPlace(match.params.id)
  }

  createPlace = async (form) => {
    const { actions, match } = this.props

    return actions.createPlace(match.params.id, form)
  }

  updatePlace = async (form) => {
    const { actions, match } = this.props

    return actions.updatePlace(match.params.id, form)
  }

  render() {
    const { classes, room, actions: { setMessage } } = this.props
    const { isGuestsLoaded } = this.state

    return (
      <section className={classes.root}>
        <div className={classes.guests}>
          <div className={classes.heading}>
            <Typography variant="h5">Приглашенные гости</Typography>
            <Invite
              room={room}
              onLoad={this.loadInvite}
              onCreate={this.createInvite}
              onUpdate={this.updateInvite}
            />
          </div>
          <Guests
            guests={room?.guests || []}
            onLoad={this.loadGuests}
          />
        </div>
        {isGuestsLoaded && room && (
          <Chat
            room={room}
            onLoad={this.loadMessages}
            onSend={this.sendMessage}
            onMessage={setMessage}
          >
            <Place
              place={room.place}
              onLoad={this.loadPlace}
              onCreate={this.createPlace}
              onUpdate={this.updatePlace}
            />
          </Chat>
        )}
      </section>
    )
  }
}

RoomScene.propTypes = {
  classes: object.isRequired,
  room: roomShape,
  match: matchShape,
  actions: shape({
    loadRoom: func.isRequired,
    loadMessages: func.isRequired,
    loadGuests: func.isRequired,
    loadInvite: func.isRequired,
    createInvite: func.isRequired,
    updateInvite: func.isRequired,
    loadPlace: func.isRequired,
    createPlace: func.isRequired,
    updatePlace: func.isRequired,
    sendMessage: func.isRequired,
    setMessage: func.isRequired,
  }),
}

export default withStyles(styles)(connector(RoomScene))
