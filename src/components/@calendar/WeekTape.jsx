import React from 'react'
import { object, number, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import range from 'lodash/range'
import moment from 'moment'
import Day from './Day'

const styles = {
  root: {},
}

const weekdays = days => moment()
  .startOf('week')
  .isoWeekday('Monday')
  .add(7 * (days + 1), 'days')

const WeekTape = ({ className, classes, children, week }) => range(1, 8).map((day) =>
  <div key={day}>
    <Day>{weekdays(week).day(day).toISOString()}</Day>
  </div>
)

WeekTape.propTypes = {
  className: string,
  classes: object.isRequired,
  week: number.isRequired
}

export default withStyles(styles)(WeekTape)
