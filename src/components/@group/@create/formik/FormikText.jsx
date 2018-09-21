import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { TextField } from '@material-ui/core'

const FormikText = ({ field, form, rows, rowsMax, ...props }) =>
  <TextField
    {...props}
    {...field}
    InputLabelProps={{ shrink: true }}
    fullWidth
    multiline
    rows={rows}
    rowsMax={rowsMax}
    margin="dense"
    error={(form.submitCount > 0) && !!form.errors[field.name]}
    helperText={(form.submitCount > 0) && form.errors[field.name]}
  />

FormikText.propTypes = {
  rows: number,
  rowsMax: number,
  field: shape({
    name: string,
    value: string,
    onChange: func,
    onBlur: func,
  }).isRequired,
  form: shape({
    errors: object,
    submitCount: number,
  }).isRequired,
}

FormikText.defaultProps = {
  rows: null,
  rowsMax: null,
}

export default FormikText
