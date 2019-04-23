import React, { Component } from 'react'
import { object, node, bool, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import background from './Background.max-300x300.jpg'

const styles = {
  root: {
    flexGrow: 1,
    overflow: 'auto',
    padding: '15px 0',
    position: 'relative',
    background: `url(${background})`,
  },
}

class ChatBody extends Component {

  chatBody = React.createRef()

  componentWillReceiveProps(nextProps) {
    if (nextProps.isScrollingBottom) this.scrollToBottom()
  }

  scrollToBottom = () => {
    const { onScrollBottom } = this.props
    const chatBody = this.chatBody.current
    chatBody.scrollTop = chatBody.scrollHeight

    onScrollBottom()
  }

  render() {
    const { classes, children } = this.props

    return (
      <div ref={this.chatBody} className={classes.root}>{children}</div>
    )
  }
}

ChatBody.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  isScrollingBottom: bool.isRequired,
  onScrollBottom: func.isRequired,
}

export default withStyles(styles)(ChatBody)
