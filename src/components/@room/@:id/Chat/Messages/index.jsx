import React from 'react'
import { arrayOf, bool, number, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import Message from './Message'
import Loading from 'components/elements/Loading'
import UserCaption from './UserCaption'

const styles = {
  root: {},
  loading: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  }
}

let prev_id = null

const displayUserName = (message) => {
  const isNameVisible = message.user_id !== prev_id

  prev_id = message.user_id

  return isNameVisible ? message.user.name : null
}

const Messages = ({ classes, isLoading, messages, auth_id }) =>
  <>
    {isLoading && <Loading className={classes.loading} />}
    {messages.map(message => (
      <div key={message.id}>
        <UserCaption isMine={message.user_id === auth_id}>
          {displayUserName(message)}
        </UserCaption>
        <Message isMine={message.user_id === auth_id} message={message} />
      </div>
    ))}
  </>

Messages.propTypes = {
  classes: object.isRequired,
  messages: arrayOf(messageShape).isRequired,
  auth_id: number.isRequired,
  isLoading: bool,
}

export default withStyles(styles)(Messages)
