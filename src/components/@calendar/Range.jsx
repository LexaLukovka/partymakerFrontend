import React from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    border: '1px solid rgba(0, 0, 0, 0.54)',
    borderRadius: 5,
    display: 'flex',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  time: { color: theme.palette.secondary.main },
  linkButton: {
    color: theme.palette.primary.main,
  }
})

const Range = ({ className, classes }) =>
  <div className={classNames(classes.root, className)}>
    <div>
      <div>500 грн</div>
      <div className={classes.time}>9:00 - 11:30</div>
      <div>выбрать</div>
    </div>
  </div>

Range.propTypes = {
  className: string,
  classes: object.isRequired,
}

export default withStyles(styles)(Range)
