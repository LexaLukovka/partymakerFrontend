import React, { Component } from 'react'
import { object, func, string } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import ArrowBackIcon from 'mdi-react/ArrowBackIcon'
import ArrowForwardIcon from 'mdi-react/ArrowForwardIcon'
import classNames from 'classnames'
import range from 'lodash/range'
import moment from 'moment'
import WeekTape from './WeekTape'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  days: {
    width: '820px',
    overflowX: 'hidden'
  },
  frame: {
    display: 'flex',
  },
  navigate: {
    display: 'flex',
    alignItems: 'center',
  }
}

class WeekSlider extends Component {
  state = {
    week: 0,
    tapes: []
  }

  componentDidMount() {
    this.setState({
      tapes: [this.getTape(0)]
    })
  }

  next = () => {
    const { tapes, week } = this.state

    const nextWeek = week + 1

    tapes.push(this.getTape(nextWeek))

    this.setState(({ week: nextWeek, tapes }))
  }

  back = () => {
    const { tapes, week } = this.state

    const prevWeek = week - 1

    tapes.unshift(this.getTape(prevWeek))

    this.setState(({ week: prevWeek, tapes }))
  }

  getTape = (week) => {
    return <WeekTape key={week} week={week} />
  }

  render() {
    const { className, classes } = this.props
    const { week, tapes } = this.state

    return (
      <div className={classNames(classes.root, className)}>
        <IconButton onClick={this.back}><ArrowBackIcon /></IconButton>
        <div className={classes.days}>
          <div
            className={classes.frame}
            style={{
              transform: `translateX(${820 * -week}px)`,
              transition: 'transform ease-out 5.45s'
            }}
          >
            {tapes}
          </div>
        </div>
        <IconButton onClick={this.next}><ArrowForwardIcon /></IconButton>
      </div>
    )
  }
}

WeekSlider.propTypes = {
  className: string,
  classes: object.isRequired,
}

export default withStyles(styles)(WeekSlider)
