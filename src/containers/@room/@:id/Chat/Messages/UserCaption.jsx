import React, { memo } from 'react'
import { object, bool, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    marginBottom: -5,
    padding: '0 80px'
  },
}

const UserCaption = ({ classes, isMine, children }) => {

  if (!children) return null

  if (isMine) return null

  return (
    <Typography
      className={classes.root}
      align={isMine ? 'right' : 'left'}
      variant="caption"
      color="textSecondary"
    >
      {children}
    </Typography>
  )
}

UserCaption.propTypes = {
  classes: object.isRequired,
  isMine: bool.isRequired,
  children: node
}

const isEqual = (prev, next) => {
  if (prev.isMine !== next.isMine) return false

  return prev.children === next.children
}

export default withStyles(styles)(memo(UserCaption, isEqual))
