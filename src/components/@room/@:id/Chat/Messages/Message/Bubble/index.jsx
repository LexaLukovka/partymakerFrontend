import React, { memo } from 'react'
import { object, bool, node } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    maxWidth: 500,
  },
  isMine: {
    background: theme.palette.primary.main
  }
})

const Bubble = ({ classes, children, isMine }) =>
  <div className={classNames({ [classes.root]: true, isMine: isMine })}>
    {children}
  </div>

Bubble.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  isMine: bool.isRequired,
}

const isEqual = (prev, next) => {
  if (prev.isMine !== next.isMine) return false

  return prev.children === next.children
}

export default withStyles(styles)(memo(Bubble, isEqual))
