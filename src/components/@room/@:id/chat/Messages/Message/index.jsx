import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import UserAvatar from 'components/elements/UserAvatar'
import classNames from 'classnames'
import Bubble from './Bubble'

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

const Message = ({ classes, message, isMine }) =>
  <div className={classNames({
    [classes.root]: true,
    [classes.isMine]: isMine,
  })}>
    <UserAvatar user={message.user} />
    <Bubble isMine={isMine}>
      {message.text}
    </Bubble>
  </div>

Message.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired,
  isMine: bool,
}

export default withStyles(styles)(Message)
