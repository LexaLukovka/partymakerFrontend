import React, { Component } from 'react'
import { func, object, shape } from 'prop-types'
import matchShape from 'shapes/match'
import authShape from 'shapes/auth'
import roomShape from 'shapes/room'
import { Typography, withStyles } from '@material-ui/core'
import Invite from './Invite'
import Guests from './Guests'
import Chat from './Chat'
import connector from './connector'
import Socket from 'services/Socket'
import Place from './Place'
import RoomTitle from './RoomTitle'
import DropdownMenu from './DropdownMenu'
import ChatHeader from './ChatHeader'
import connectToSockets from './sockets'

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
  chat: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100vh - 65px)',
  }
}

class RoomScene extends Component {

  state = {
    isGuestsLoaded: false
  }

  componentDidMount() {
    connectToSockets(this.props).catch(console.error)
    this.loadRoom().catch(console.error)
  }

  componentWillUnmount() {
    const { match, } = this.props
    const room_id = match.params.id
    Socket.emit('leave', room_id)
    Socket.close()
  }

  loadRoom = async () => {
    const { actions, match } = this.props
    await actions.rooms.load(match.params.id)
  }

  loadPlace = () => {
    const { actions, room } = this.props
    if (!room?.place_id) return
    return actions.place.load(room.place_id)
  }

  addPlace = async (form) => {
    const { actions, room } = this.props
    const { value: place } = await actions.place.create(form)
    await actions.rooms.update(room.id, { place_id: place.id })
    return place
  }

  loadMessages = async (params) => {
    const { actions, match } = this.props
    await actions.rooms.messages.loadMany(match.params.id, params)
  }

  loadGuests = async () => {
    const { match, actions } = this.props
    await actions.rooms.guests.loadMany(match.params.id)
    this.setState({ isGuestsLoaded: true })
  }

  loadInvite = () => {
    const { actions, match } = this.props
    return actions.rooms.invite.load(match.params.id)
  }

  createInvite = (form) => {
    const { actions, match } = this.props
    return actions.rooms.invite.create(match.params.id, form)
  }

  updateInvite = (form) => {
    const { actions, match } = this.props
    return actions.rooms.invite.update(match.params.id, form)
  }

  sendMessage = (form) => {
    const { actions, match } = this.props
    return actions.rooms.messages.create(match.params.id, form)
  }

  render() {
    const { classes, room, auth, actions } = this.props
    const { isGuestsLoaded } = this.state

    return (
      <section className={classes.root}>
        <div className={classes.guests}>
          <div className={classes.heading}>
            <Typography variant="h5">Приглашенные гости</Typography>
            <Invite
              invite={room?.invite}
              onLoad={this.loadInvite}
              onCreate={this.createInvite}
              onUpdate={this.updateInvite}
            />
          </div>
          {room && (
            <Guests
              auth={auth}
              room={room}
              onLoad={this.loadGuests}
              onKick={actions.rooms.guests.kick}
            />
          )}
        </div>
        {room?.guests && (
          <div className={classes.chat}>
            <ChatHeader>
              <Place
                place={room.place}
                onLoad={this.loadPlace}
                onCreate={this.addPlace}
                onUpdate={actions.place.update}
              >
                <RoomTitle room={room} onChange={actions.rooms.update} />
              </Place>
              <DropdownMenu
                room={room}
                onLeave={actions.rooms.leave}
              />
            </ChatHeader>
            {isGuestsLoaded && (
              <Chat
                auth={auth}
                messages={room?.messages}
                totalMessages={room?.totalMessages}
                onLoad={this.loadMessages}
                onSend={this.sendMessage}
              />
            )}
          </div>
        )}
      </section>
    )
  }
}

RoomScene.propTypes = {
  classes: object.isRequired,
  room: roomShape,
  auth: authShape,
  match: matchShape,
  actions: shape({
    rooms: shape({
      load: func.isRequired,
      update: func.isRequired,
      messages: shape({
        loadMany: func.isRequired,
        create: func.isRequired,
        read: func.isRequired,
        receive: func.isRequired,
      }),
      guests: shape({
        joined: func.isRequired,
        left: func.isRequired,
        loadMany: func.isRequired,
        kick: func.isRequired,
      }),
      invite: shape({
        load: func.isRequired,
        create: func.isRequired,
        update: func.isRequired,
      }),
    }),
    messages: shape({
      remove: func.isRequired,
      set: func.isRequired,
    }),
    place: shape({
      load: func.isRequired,
      create: func.isRequired,
      update: func.isRequired,
    }),
    users: shape({
      online: func.isRequired,
      offline: func.isRequired,
    })
  }),
}

export default withStyles(styles)(connector(RoomScene))
