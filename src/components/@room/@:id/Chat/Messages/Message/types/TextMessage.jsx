import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'

const styles = {
  root: {
    padding: 15,
  },
}

const TextMessage = ({ classes, message }) => {

  if (!message.text) return null

  return (
    <div className={classes.root}>
      {message.text}
    </div>
  )
}
TextMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired
}

export default withStyles(styles)(TextMessage)
