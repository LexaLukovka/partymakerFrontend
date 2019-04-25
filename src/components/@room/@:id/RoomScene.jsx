import React, { Component } from 'react'
import { shape, object, func } from 'prop-types'
import authShape from 'shapes/auth'
import matchShape from 'shapes/match'
import roomShape from 'shapes/room'
import { Typography, withStyles } from '@material-ui/core'
import InviteButton from './InviteButton'
import Guests from './Guests'
import Chat from './Chat'
import connector from './connector'
import Socket from 'services/Socket'

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

    return actions.loadRoomMessages(match.params.id, { page, limit })
  }

  loadGuests = async () => {
    const { actions, match } = this.props
    const result = await actions.loadRoomGuests(match.params.id)
    this.setState({ isGuestsLoaded: true })

    return result
  }

  render() {
    const { classes, room, auth, actions: { setMessage } } = this.props
    const { isGuestsLoaded } = this.state

    return (
      <section className={classes.root}>
        <div className={classes.guests}>
          <div className={classes.heading}>
            <Typography variant="h5">Приглашенные гости</Typography>
            <InviteButton room_id={room?.id} />
          </div>
          <Guests guests={room?.guests || []} onLoad={this.loadGuests} />
        </div>
        {isGuestsLoaded && room && (
          <Chat
            auth_id={auth.user_id}
            room={room}
            onLoad={this.loadMessages}
            onSend={this.sendMessage}
            onMessage={setMessage}
          />
        )}
      </section>
    )
  }
}

RoomScene.propTypes = {
  classes: object.isRequired,
  auth: authShape.isRequired,
  room: roomShape,
  match: matchShape,
  actions: shape({
    loadRoom: func.isRequired,
    loadRoomMessages: func.isRequired,
    loadRoomGuests: func.isRequired,
    sendMessage: func.isRequired,
    setMessage: func.isRequired,
  }),
}

export default withStyles(styles)(connector(RoomScene))
