import React from 'react'
import { object, number, string, shape, func } from 'prop-types'
import { TextField } from '@material-ui/core'

const FormikText = ({ field, form, ...props }) =>
  <TextField
    {...props}
    {...field}
    fullWidth
    margin="dense"
    error={(form.submitCount > 0) && !!form.errors[field.name]}
    helperText={(form.submitCount > 0) && form.errors[field.name]}
  />

FormikText.propTypes = {
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

export default FormikText
