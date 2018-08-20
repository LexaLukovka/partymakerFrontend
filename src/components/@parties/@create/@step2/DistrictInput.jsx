import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Typography } from '@material-ui/core'

const styles = {
  root: {
    padding: '5px 0',
  },
}

const DistrictInput = ({ classes, values, handleChange, handleBlur, errors, touched }) =>
  <div className={classes.root}>
    <Typography variant="subheading">В каком районе будет вечеринка?</Typography>
    <TextField
      fullWidth
      name="district"
      placeholder="Район"
      value={values.district}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!errors.district && touched.district}
      helperText={errors.district}
    />
  </div>

DistrictInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    district: string,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: shape({
    district: string,
  }).isRequired,
  touched: object.isRequired,

}

export default withStyles(styles)(DistrictInput)
