/* eslint-disable no-param-reassign */
import { withStyles } from '@material-ui/core'
import { string, func, object } from 'prop-types'
import React, { Component } from 'react'
import MessageInput from './MessageInput'

const styles = {
  root: {
    flexGrow: 1,
    maxHeight: 72,
    overflow: 'auto',
  },
}

class MessageField extends Component {

  listenForEnter = async (e) => {
    const { onSend } = this.props
    const code = (e.keyCode ? e.keyCode : e.which)

    if (code === 13 && !e.shiftKey) {
      onSend(e)
    }
  }

  render() {
    const { classes, name, value, placeholder, onChange, onPaste } = this.props

    return (
      <div className={classes.root}>
        <MessageInput
          name={name}
          value={value}
          placeholder={placeholder}
          className={classes.root}
          onKeyPress={this.listenForEnter}
          onChange={onChange}
          onPaste={onPaste}
        />
      </div>
    )
  }
}

MessageField.propTypes = {
  classes: object.isRequired,
  placeholder: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onSend: func.isRequired,
  onChange: func.isRequired,
  onPaste: func.isRequired,
}

export default withStyles(styles)(MessageField)
