import React from 'react'
import { object, number, string, shape, func } from 'prop-types'
import { TextField } from '@material-ui/core'
import NumberFormat from 'react-number-format'

const FormikPhone = ({ field, form, ...props }) =>
  <NumberFormat
    {...props}
    {...field}
    format="+38 (###) ###-####"
    mask="_"
    fullWidth
    placeholder="+38 (068) 318-8524"
    type="tel"
    customInput={TextField}
    InputLabelProps={{ shrink: true }}
    margin="dense"
    error={(form.submitCount > 0) && !!form.errors[field.name]}
    helperText={(form.submitCount > 0) && form.errors[field.name]}
  />

FormikPhone.propTypes = {
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

export default FormikPhone
