import React from 'react'
import { node, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = {
  root: {}
}

const Chat = ({ classes, children, className, }) =>
  <div className={classNames([classes.root, className])}>
    {children}
  </div>

Chat.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string,
}

export default withStyles(styles)(Chat)
