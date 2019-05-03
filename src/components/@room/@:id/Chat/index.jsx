import React, { Component } from 'react'
import { object, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import roomShape from 'shapes/room'
import authShape from 'shapes/auth'
import Socket from 'services/Socket'
import ChatBody from './ChatBody'
import Messages from './Messages'
import ChatForm from './ChatForm'

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
    isForceScrollingBottom: false,
    isLoading: true
  }

  componentDidMount() {
    this.loadAndForceScrollBottom().catch(console.error)
    const { onMessage } = this.props

    Socket.on('message', (message) => {
      onMessage(message)
      this.scrollBottom()
    })
  }

  loadAndForceScrollBottom = async () => {
    await this.load()
    this.forceScrollBottom()
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

  forceScrollBottom = () => {
    this.setState({ isForceScrollingBottom: true })
  }

  disableScrolling = () => {
    this.setState({ isScrollingBottom: false })
  }

  disableForceScrolling = () => {
    this.setState({ isForceScrollingBottom: false })
  }

  render() {
    const { classes, auth, room } = this.props
    const { isScrollingBottom, isForceScrollingBottom, isLoading } = this.state

    return (
      <div className={classes.root}>
        <ChatBody
          isScrollingBottom={isScrollingBottom}
          isForceScrollingBottom={isForceScrollingBottom}
          onScrollBottom={this.disableScrolling}
          onScrollTop={this.loadMoreMessages}
          onForceScrollBottom={this.disableForceScrolling}
        >
          <Messages isLoading={isLoading} messages={room.messages}
          />
        </ChatBody>
        <ChatForm auth={auth} onSubmit={this.sendMessage} />
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

export default withStyles(styles)(Chat)
