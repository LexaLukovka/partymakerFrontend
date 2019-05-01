import React, { Component } from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import UserAvatar from 'components/elements/UserAvatar'
import classNames from 'classnames'
import Bubble from './Bubble'
import TextMessage from './types/TextMessage'
import PictureMessage from './types/PictureMessage'
import FileMessage from './types/FileMessage'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5px 15px'
  },
  isMine: {
    flexDirection: 'row-reverse',
  }
}

class Message extends Component {

  render() {
    const { classes, message, isMine } = this.props

    return (
      <div className={classNames({
        [classes.root]: true,
        [classes.isMine]: isMine,
      })}>
        <UserAvatar user={message.user} />
        <Bubble isMine={isMine}>
          <PictureMessage message={message} />
          <TextMessage message={message} />
          <FileMessage message={message} />
        </Bubble>
      </div>
    )
  }
}

Message.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired,
  isMine: bool.isRequired,
}

export default withStyles(styles)(Message)
