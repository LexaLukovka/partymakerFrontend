import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Typography } from '@material-ui/core'

const styles = {
  root: {
    padding: '5px 0',
  },
}

const TimeInput = ({ classes, values, handleChange, handleBlur, errors, touched }) =>
  <div className={classes.root}>
    <Typography variant="subheading">Во сколько начало?</Typography>
    <TextField
      fullWidth
      type="time"
      name="startTime"
      placeholder="Время"
      value={values.startTime}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!errors.startTime && touched.startTime}
      helperText={errors.startTime}
    />
  </div>

TimeInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    startTime: string,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: shape({
    startTime: string,
  }).isRequired,
  touched: object.isRequired,
}

export default withStyles(styles)(TimeInput)
