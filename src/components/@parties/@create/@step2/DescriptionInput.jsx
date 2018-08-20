import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Typography } from '@material-ui/core'

const styles = {
  root: {
    padding: '5px 0',
  },
}

const DescriptionInput = ({ classes, values, handleChange, handleBlur, errors, touched }) =>
  <div className={classes.root}>
    <Typography variant="subheading">Описание</Typography>
    <TextField
      fullWidth
      multiline
      rows={2}
      rowsMax={3}
      name="description"
      placeholder="Особенности вашей вечеринки..."
      value={values.description}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!errors.description && touched.description}
      helperText={errors.description}
    />
  </div>

DescriptionInput.propTypes = {
  classes: object.isRequired,
  values: shape({
    description: string,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  errors: shape({
    description: string,
  }).isRequired,
  touched: object.isRequired,
}

export default withStyles(styles)(DescriptionInput)
