import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Day from './Day'
import WeekSlider from './WeekSlider'

const styles = {
  root: {
    display: 'flex',
    margin: 10,
    border: '1px solid black',
    padding: 10,
  },
}

const LoginScene = ({ classes }) =>
  <div className={classes.root}>
    <WeekSlider>
      {date => <Day>{date.toISOString()}</Day>}
    </WeekSlider>
  </div>
LoginScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(LoginScene)
