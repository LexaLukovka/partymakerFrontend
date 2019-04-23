import React, { Component } from 'react'
import { arrayOf, number, object, func, string, shape } from 'prop-types'
import userShape from 'shapes/user'
import placeShape from 'shapes/place'
import { Typography, withStyles } from '@material-ui/core'
import SearchField from 'components/elements/SearchField'
import NotFound from 'components/modules/NotFound'
import messageShape from 'shapes/message'
import PersonButton from './PersonButton'
import Guests from './Guests'
import Chat from './chat/Chat'
import ChatHeader from './chat/ChatHeader'
import ChatBody from './chat/ChatBody'
import ChatForm from './chat/ChatForm'
import Messages from './chat/Messages'
import connector from './connector'

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
  },
}

class RoomScene extends Component {
  constructor(props) {
    super(props)

    this.loadRoom().catch(console.error)
  }

  loadRoom = async () => {
    const { actions, match } = this.props
    actions.setCurrentRoom(match.params.id)
    await actions.loadRoom(match.params.id)
    await actions.loadRoomGuests(match.params.id)
    await actions.loadRoomMessages(match.params.id)
  }

  setPlace = () => {
    console.log('set place')
  }

  render() {
    const { classes, room, auth } = this.props

    if (!room) return <NotFound />

    console.log(room)

    return (
      <section className={classes.root}>
        <div className={classes.guests}>
          <div className={classes.heading}>
            <Typography variant="h5">Приглашенные гости</Typography>
            <PersonButton />
          </div>
          <Guests guests={room.guests} />
        </div>
        <Chat className={classes.chat}>
          <ChatHeader
            title={room.title}
            place_title={room.place?.title}
            onSetPlace={this.setPlace}
          />
          <ChatBody>
            <Messages auth_id={auth.user_id} messages={room.messages} />
          </ChatBody>
          <ChatForm />
        </Chat>
      </section>
    )
  }
}

RoomScene.propTypes = {
  classes: object.isRequired,
  auth: shape({
    user_id: number.isRequired,
  }),
  room: shape({
    place: placeShape,
    guests: arrayOf(userShape).isRequired,
    messages: arrayOf(messageShape).isRequired,
  }),
  match: shape({
    params: shape({
      id: string.isRequired,
    }),
  }),
  actions: shape({
    setCurrentRoom: func.isRequired,
    loadRoom: func.isRequired,
    loadRoomMessages: func.isRequired,
    loadRoomGuests: func.isRequired,
  }),
}

export default withStyles(styles)(connector(RoomScene))
