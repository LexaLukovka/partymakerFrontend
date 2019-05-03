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
    const { classes, message } = this.props

    return (
      <div className={classNames({
        [classes.root]: true,
        [classes.isMine]: message.isMine,
      })}>
        <UserAvatar user={message.user} />
        <Bubble isMine={message.isMine}>
          {(() => {

            if (isPicture(message.asset?.url)) {
              return <PictureMessage message={message} />
            }

            if (message.asset_id) {
              return <FileMessage message={message} />
            }

            if (message.place_id) {
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
}

export default withStyles(styles)(Message)
