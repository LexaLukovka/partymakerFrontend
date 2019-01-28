import React from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import range from 'lodash/range'

const styles = {
  root: {
    paddingTop: 65,
  },
  hour: {
    paddingBottom: 100,
  }
}

const WorkingHours = ({ className, classes }) =>
  <div className={classNames(classes.root, className)}>
    {range(10, 22).map(hour => <div className={classes.hour}>{hour}</div>)}
  </div>

WorkingHours.propTypes = {
  className: string,
  classes: object.isRequired,
}

export default withStyles(styles)(WorkingHours)
