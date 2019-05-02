import React, { Component } from 'react'
import { object, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import roomShape from 'shapes/room'
import authShape from 'shapes/auth'
import Socket from 'services/Socket'
import ChatBody from './ChatBody'
import Messages from './Messages'
import ChatForm from './ChatForm'
import withAuth from './withAuth'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100vh - 141px)'
  },
  titles: {
    paddingLeft: 13,
  }
}

class Chat extends Component {

  state = {
    page: 1,
    limit: 20,
    isScrollingBottom: false,
    isLoading: false
  }

  componentDidMount() {
    this.loadAndScrollBottom().catch(console.error)
    const { onMessage } = this.props

    Socket.on('message', (message) => {
      onMessage(message)
      this.scrollBottom()
    })
  }

  loadAndScrollBottom = async () => {
    await this.load()
    this.scrollBottom()
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
    const { room, onSend } = this.props
    const result = await onSend(room.id, form)
    this.scrollBottom()

    return result
  }

  loadMoreMessages = () => {
    const { room } = this.props
    const { page, limit } = this.state

    if (room.totalMessages <= page * limit) return null

    return this.load(page + 1)
  }

  scrollBottom = () => {
    this.setState({ isScrollingBottom: true })
  }

  disableScrolling = () => {
    this.setState({ isScrollingBottom: false })
  }

  render() {
    const { classes, auth, room } = this.props
    const { isScrollingBottom, isLoading } = this.state

    return (
      <div className={classes.root}>
        <ChatBody
          isScrollingBottom={isScrollingBottom}
          onScrollBottom={this.disableScrolling}
          onScrollTop={this.loadMoreMessages}
        >
          <Messages
            isLoading={isLoading}
            auth_id={auth.user_id}
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
  auth: authShape.isRequired,
  onLoad: func.isRequired,
  onSend: func.isRequired,
  onMessage: func.isRequired,
}

export default withStyles(styles)(withAuth(Chat))
