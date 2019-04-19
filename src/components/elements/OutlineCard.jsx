import React from 'react'
import { object, node, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = {
  root: {
    padding: 6,
    borderRadius: 3,
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
  },
}

const OutlineCard = ({ classes, className, children }) =>
  <div className={classNames([classes.root, className])}>
    {children}
  </div>

OutlineCard.propTypes = {
  classes: object.isRequired,
  className: string,
  children: node,
}

export default withStyles(styles)(OutlineCard)
