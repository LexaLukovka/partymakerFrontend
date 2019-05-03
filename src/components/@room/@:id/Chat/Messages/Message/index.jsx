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
import PlaceMessage from './types/PlaceMessage'
import isPicture from 'utils/isPicture'

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
          {(() => {

            if (isPicture(message.asset?.url)) {
              return <PictureMessage url={message.asset.url} />
            }

            if (message.asset) {
              return <FileMessage message={message} />
            }

            if (message.place) {
              return <PlaceMessage message={message} />
            }

            return <TextMessage message={message} />
          })()}

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
