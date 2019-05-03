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
    const { match } = this.props
    Socket.subscribe(`room:${match.params.id}`)
    this.loadRoom().catch(console.error)
  }

  componentWillUnmount() {
    Socket.close()
  }

  loadRoom = async () => {
    const { actions, match } = this.props
    await actions.room.load(match.params.id)
  }

  loadPlace = () => {
    const { actions, room } = this.props
    if (!room?.place_id) return

    return actions.place.load(room.place_id)
  }

  addPlace = async (form) => {
    const { actions, room } = this.props
    const { value: place } = await actions.place.create(form)
    await actions.room.update(room.id, { place_id: place.id })

    return place
  }

  loadMessages = async (params) => {
    const { actions, match } = this.props
    await actions.room.messages.loadMany(match.params.id, params)
  }

  loadGuests = async () => {
    const { match, actions } = this.props
    await actions.room.guests.loadMany(match.params.id)
    this.setState({ isGuestsLoaded: true })
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
              room={room}
              onLoad={actions.room.invite.load}
              onCreate={actions.room.invite.create}
              onUpdate={actions.room.invite.update}
            />
          </div>
          {room && (
            <Guests
              admin={room?.admin}
              guests={room?.guests || []}
              onLoad={this.loadGuests}
              onKick={actions.room.guests.kick}
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
                <RoomTitle
                  room={room}
                  onChange={actions.room.update}
                />
              </Place>
              <DropdownMenu
                room={room}
                onLeave={actions.room.leave}
              />
            </ChatHeader>
            {isGuestsLoaded && (
              <Chat
                auth={auth}
                room={room}
                onLoad={this.loadMessages}
                onSend={actions.room.messages.create}
                onMessage={actions.room.messages.set}
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
    room: shape({
      load: func.isRequired,
      update: func.isRequired,
      messages: shape({
        loadMany: func.isRequired,
        create: func.isRequired,
        set: func.isRequired,
      }),
      guests: shape({
        loadMany: func.isRequired,
        kick: func.isRequired,
      }),
      invite: shape({
        load: func.isRequired,
        create: func.isRequired,
        update: func.isRequired,
      }),
    }),
    place: shape({
      load: func.isRequired,
      create: func.isRequired,
      update: func.isRequired,
    }),

  }),
}

export default withStyles(styles)(connector(RoomScene))
