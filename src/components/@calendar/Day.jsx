import React from 'react'
import { object, oneOfType, string, number } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Moment from 'react-moment'
import classNames from 'classnames'
import moment from 'moment'

const styles = theme => ({
  root: {
    border: '1px rgba(0, 0, 0, 0.54) solid ',
    borderRadius: 5,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    textAlign: 'center',
  },
  weekDay: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  current: {
    borderColor: theme.palette.primary.light
  }
})

const isCurrentDay = date => moment(date).isSame(new Date(), 'day')

const Day = ({ className, classes, children }) =>
  <div
    className={classNames({
      [classes.root]: true,
      [className]: true,
      [classes.current]: isCurrentDay(children)
    })}
  >
    <div className={classes.center}>
      <Typography color="inherit" variant="h5">
        <Moment format="DD">{children}</Moment>
      </Typography>
      <Moment format="dddd" className={classes.weekDay}>
        {children}
      </Moment>
    </div>
  </div>

Day.propTypes = {
  className: string,
  classes: object.isRequired,
  children: oneOfType([string, number]).isRequired,
}

export default withStyles(styles)(Day)
