import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import moment from 'moment'
import CheckIcon from 'mdi-react/CheckIcon'
import DoneAllIcon from 'mdi-react/DoneAllIcon'
import TimerIcon from 'mdi-react/TimerIcon'

const styles = theme => ({
  root: {
    padding: '9px 15px',
    display: 'flex',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 15,
  },
  caption: {
    marginLeft: 5,
    fontSize: 11,
    display: 'flex',
    alignItems: 'center'
  },
  check: {
    marginLeft: 3,
    color: theme.palette.text.secondary,
    width: 16,
    height: 16,
  }
})

const TextMessage = ({ classes, message }) => {

  if (!message.text) return null

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>{message.text}</Typography> {' '}
      <div className={classes.caption}>
        <Typography color="textSecondary" variant="caption">
          {moment(message.created_at, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')}
        </Typography>
        {message.isLoading && <TimerIcon className={classes.check} />}
        {!(message.isRead || message.isLoading) && <CheckIcon className={classes.check} />}
        {message.isRead && <DoneAllIcon className={classes.check} />}
      </div>
    </div>
  )
}
TextMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired
}

export default withStyles(styles)(TextMessage)
