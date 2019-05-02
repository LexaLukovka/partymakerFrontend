import React from 'react'
import { object, arrayOf, number, bool } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import Message from './Message'
import Loading from 'components/elements/Loading'

const styles = {
  root: {},
  loading: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  }
}

const Messages = ({ classes, isLoading, messages, auth_id }) => (
  <>
    {isLoading && <Loading className={classes.loading} />}
    {messages.map(message => (
      <Message
        key={message.id}
        isMine={message.user_id === auth_id}
        message={message}
      />
    ))}
  </>
)

Messages.propTypes = {
  classes: object.isRequired,
  messages: arrayOf(messageShape).isRequired,
  auth_id: number.isRequired,
  isLoading: bool,
}

export default withStyles(styles)(Messages)
