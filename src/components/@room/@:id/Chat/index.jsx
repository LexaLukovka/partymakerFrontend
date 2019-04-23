import React, { Component } from 'react'
import { object, number, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import roomShape from 'shapes/room'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import Messages from './Messages'
import ChatForm from './ChatForm'
import wait from 'utils/wait'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  }
}

class Chat extends Component {

  state = {
    page: 1,
    limit: 20,
    isScrollingBottom: false,
    isLoading: false
  }

  constructor(props) {
    super(props)
    this.loadAndScrollBottom().catch(console.error)
  }

  loadAndScrollBottom = async () => {
    await this.load()
    this.setState({ isScrollingBottom: true })
  }

  load = async (page = 1) => {
    const { onLoad } = this.props
    const { limit } = this.state

    this.setState({ page, isLoading: true })
    const result = await onLoad({ page, limit })
    this.setState({ isLoading: false })

    return result
  }

  sendMessage = async (form) => {
    const { onSend } = this.props
    const result = await onSend(form)
    await wait(50)
    this.setState({ isScrollingBottom: true })

    return result
  }

  loadMoreMessages = () => {
    const { room } = this.props
    const { page, limit } = this.state

    if (room.totalMessages <= page * limit) return null

    return this.load(page + 1)
  }

  disableScrolling = () => {
    this.setState({ isScrollingBottom: false })
  }

  setPlace = () => {
    console.log('set place')
  }

  render() {
    const { classes, auth_id, room } = this.props
    const { isScrollingBottom, isLoading } = this.state

    return (
      <div className={classes.root}>
        <ChatHeader
          title={room.title}
          place_title={room.place?.title}
          onSetPlace={this.setPlace}
        />
        <ChatBody
          isScrollingBottom={isScrollingBottom}
          onScrollBottom={this.disableScrolling}
          onScrollTop={this.loadMoreMessages}
        >
          <Messages
            isLoading={isLoading}
            auth_id={auth_id}
            messages={room.messages}
          />
        </ChatBody>
        <ChatForm onSubmit={this.sendMessage} />
      </div>
    )
  }
}

Chat.propTypes = {
  classes: object.isRequired,
  room: roomShape.isRequired,
  auth_id: number.isRequired,
  onLoad: func.isRequired,
  onSend: func.isRequired,
}

export default withStyles(styles)(Chat)
