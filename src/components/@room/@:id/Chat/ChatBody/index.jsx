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

  componentDidMount() {
    this.chatBody.current.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.chatBody.current.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {

    requestAnimationFrame(async () => {
      const scrollY = e.target.scrollTop
      const isScrollingTop = this.oldScroll > scrollY
      if (isScrollingTop && e.target.scrollTop <= 15) {
        await this.handleScrolledTop(e)
      }
      this.oldScroll = scrollY

    })
  }

  handleScrolledTop = async (e) => {
    const { onScrollTop } = this.props
    const oldScrollHeight = e.target.scrollHeight
    await onScrollTop()
    this.jumpToOriginalPosition(oldScrollHeight)
  }

  jumpToOriginalPosition = (oldScrollHeight) => {
    const element = this.chatBody.current
    const { scrollTop, scrollHeight } = element
    element.scrollTop = scrollHeight - oldScrollHeight + scrollTop
  }

  render() {
    const { classes, children } = this.props

    return (
      <div ref={this.chatBody} className={classes.root}>
        {children}
      </div>
    )
  }
}

ChatBody.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  isScrollingBottom: bool.isRequired,
  onScrollTop: func.isRequired,
  onScrollBottom: func.isRequired,
}

export default withStyles(styles)(ChatBody)
