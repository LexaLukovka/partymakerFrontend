import React from 'react'
import { object, arrayOf, number } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import Message from './Message'

const styles = {
  root: {},
}

const Messages = ({ classes, messages, auth_id }) => (
  <div className={classes.root}>
    {messages.map(message => (
      <Message
        key={message.id}
        isMine={message.user_id === auth_id}
        message={message}
      />
    ))}
  </div>
)

Messages.propTypes = {
  classes: object.isRequired,
  messages: arrayOf(messageShape).isRequired,
  auth_id: number.isRequired,
}

export default withStyles(styles)(Messages)
