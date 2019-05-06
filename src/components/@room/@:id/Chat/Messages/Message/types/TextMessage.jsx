import React, { memo } from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'

import StatusCaption from './StatusCaption'

const styles = theme => ({
  root: {
    padding: '9px 15px',
    display: 'flex',
    borderRadius: 15,
    alignItems: 'flex-end',
    boxShadow: '2px 2px 3px -1px rgba(156, 169, 189, 0.3)',
    background: theme.palette.secondary.main
  },
  text: {
    fontSize: 15,
  },
})

const TextMessage = ({ classes, message }) => {

  if (!message.text) return null

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>{message.text}</Typography> {' '}
      <StatusCaption message={message} />
    </div>
  )
}
TextMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired
}
const isEqual = (prev, next) => {
  return prev.message.text === next.message.text
}

export default withStyles(styles)(memo(TextMessage, isEqual))
