import React, { Component } from 'react'
import { arrayOf, object, func, string, shape } from 'prop-types'
import userShape from 'shapes/user'
import placeShape from 'shapes/place'
import { Typography, withStyles } from '@material-ui/core'
import SearchField from 'components/elements/SearchField'
import NotFound from 'components/modules/NotFound'
import messageShape from 'shapes/message'
import PersonButton from './PersonButton'
import Guests from './Guests'
import Chat from './Chat'
import ChatHeader from './Chat/ChatHeader'
import ChatBody from './Chat/ChatBody'
import ChatForm from './Chat/ChatForm'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
  },
  guests: {
    width: 400,
    padding: '0 20px',
    borderRight: 'solid 1px rgba(0, 0, 0, 0.12)'
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0 30px 0'
  },
  chat: {
    flexGrow: 1
  }
}

class RoomScene extends Component {

  constructor(props) {
    super(props)
    const { actions, match: { params } } = this.props
    actions.setCurrentRoom(params.id)

    actions.loadRoom(params.id)
    actions.loadRoomMessages(params.id)
    actions.loadRoomGuests({ room_id: params.id })
  }

  render() {
    const { classes, room } = this.props

    if (!room) return <NotFound />

    return (
      <section className={classes.root}>
        <div className={classes.guests}>
          <div className={classes.heading}>
            <Typography variant="h5">
              Приглашенные гости
            </Typography>
            <PersonButton />
          </div>
          <SearchField />
          <Guests guests={room.guests} />
        </div>
        <Chat className={classes.chat}>
          <ChatHeader title={room.title} place={room.place} />
          <ChatBody messages={room.messages} />
          <ChatForm />
        </Chat>
      </section>
    )
  }
}

RoomScene.propTypes = {
  classes: object.isRequired,
  room: shape({
    place: placeShape,
    guests: arrayOf(userShape).isRequired,
    messages: arrayOf(messageShape).isRequired
  }),
  match: shape({
    params: shape({
      id: string.isRequired
    })
  }),
  actions: shape({
    setCurrentRoom: func.isRequired,
    loadRoom: func.isRequired,
    loadRoomMessages: func.isRequired,
    loadRoomGuests: func.isRequired,
  })
}

export default withStyles(styles)(connector(RoomScene))
