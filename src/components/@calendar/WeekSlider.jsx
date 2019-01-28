import React, { Component } from 'react'
import { object, func, string } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import ArrowBackIcon from 'mdi-react/ArrowBackIcon'
import ArrowForwardIcon from 'mdi-react/ArrowForwardIcon'
import classNames from 'classnames'
import range from 'lodash/range'
import moment from 'moment'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  days: {
    display: 'flex',
  },
  day: {
    width: 100,
    margin: '0 7.5px'
  },
  navigate: {
    display: 'flex',
    alignItems: 'center',
  }
}

const weekdays = days => moment()
  .startOf('week')
  .isoWeekday('Monday')
  .add(7 * (days + 1), 'days')

class WeekSlider extends Component {
  state = {
    week: 0
  }

  back = () => {
    this.setState(({ week }) => ({
      week: week - 1
    }))
  }

  next = () => {
    this.setState(({ week }) => ({
      week: week + 1
    }))
  }

  render() {
    const { className, classes, children } = this.props
    const { week } = this.state

    return (
      <div className={classNames(classes.root, className)}>
        <IconButton onClick={this.back}><ArrowBackIcon /></IconButton>
        <div className={classes.days}>
          {range(1, 8).map((day) =>
            <div key={day} className={classes.day}>
              {children(weekdays(week).day(day))}
            </div>
          )}
        </div>
        <IconButton onClick={this.next}><ArrowForwardIcon /></IconButton>
      </div>
    )
  }
}

WeekSlider.propTypes = {
  className: string,
  children: func.isRequired,
  classes: object.isRequired,
}

export default withStyles(styles)(WeekSlider)
