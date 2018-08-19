import React from 'react'
import { object, string, shape, func, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Typography } from '@material-ui/core'

const styles = {
  root: {
    padding: '5px 0',
  },
}

const DayInput = ({ classes, values, handleChange, handleBlur, errors, touched }) =>
  <div className={classes.root}>
    <Typography variant="subheading">Когда состоится?</Typography>
    <TextField
      fullWidth
      type="date"
      name="startDay"
      placeholder="Дата"
      value={values.startDay}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!errors.startDay && touched.startDay}
      helperText={errors.startDay}
    />
  </div>

DayInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    startDay: string,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: shape({
    startDay: string,
  }).isRequired,
  touched: object.isRequired,

}

export default withStyles(styles)(DayInput)
