import React, { Component } from 'react'
import { func, object, shape } from 'prop-types'
import matchShape from 'shapes/match'
import roomShape from 'shapes/room'
import authShape from 'shapes/auth'
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
    flexDirection: 'column'
  }
}

class RoomScene extends Component {

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

  render() {
    const { classes, room, auth, actions } = this.props

    return (
      <section className={classes.root}>
        <div className={classes.guests}>
          <div className={classes.heading}>
            <Typography variant="h5">Приглашенные гости</Typography>
            <Invite
              room={room}
              onLoad={actions.invite.load}
              onCreate={actions.invite.create}
              onUpdate={actions.invite.update}
            />
          </div>
          <Guests
            isAdmin={room?.admin_id === auth.user_id}
            guests={room?.guests || []}
            onLoad={actions.guests.loadMany}
            onKick={actions.guests.kick}
          />
        </div>
        {room?.guests && (
          <div className={classes.chat}>
            <ChatHeader>
              <Place
                place={room.place}
                onLoad={actions.place.load}
                onCreate={actions.place.create}
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
            <Chat
              room={room}
              onLoad={actions.message.loadMany}
              onSend={actions.message.send}
              onMessage={actions.message.set}
            />
          </div>
        )}
      </section>
    )
  }
}

RoomScene.propTypes = {
  classes: object.isRequired,
  room: roomShape,
  auth: authShape.isRequired,
  match: matchShape,
  actions: shape({
    room: shape({
      load: func.isRequired,
      update: func.isRequired,
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
    place: shape({
      load: func.isRequired,
      create: func.isRequired,
      update: func.isRequired,
    }),
    message: shape({
      loadMany: func.isRequired,
      send: func.isRequired,
      set: func.isRequired,
    }),
  }),
}

export default withStyles(styles)(connector(RoomScene))
